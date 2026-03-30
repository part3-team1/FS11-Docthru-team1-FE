'use client';
import CategoryDropdown from '@/components/Dropdown/CategoryDropdown/CategoryDropdown';
import * as styles from './NewChallengeForm.css';
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { challengeRequests } from '@/api/challenges.API';
import { useRequest } from '../hooks/useRequest';
import { useRequireAuth } from '@/hooks/useRequireAuth';

export default function NewChallengeForm() {
  const router = useRouter();
  const { user, isLoading } = useRequireAuth();

  const { mutate: request, isPending } = useRequest();
  const {
    register,
    handleSubmit,
    control,
    clearErrors,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm({ mode: 'onSubmit' });

  if (isLoading || !user) return null;

  const onSubmit = (data) => {
    request(data, {
      onSuccess: () => router.push('/my-page/my-challenge/participated'),
      onError: (error) => console.error(error),
    });
  };

  return (
    <>
      <form
        noValidate
        // onSubmit={handleSubmit(onSubmit)} 연결시 수정
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.container}>
          <div className={styles.title}>신규 챌린지 신청</div>
          <div className={styles.section}>
            {/* 제목 */}
            <label htmlFor="title" className={styles.label}>
              제목
            </label>
            <input
              type="text"
              placeholder="제목을 입력해주세요"
              {...register('title', {
                required: '제목은 필수 입니다.',
                minLength: {
                  value: 10,
                  message: '제목은 최소 10자 이상부터 가능합니다.',
                },
                maxLength: {
                  value: 50,
                  message: '최대 50자 까지 가능합니다.',
                },
              })}
              aria-invalid={
                isSubmitted ? (errors.title ? 'true' : 'false') : undefined
              }
              className={styles.input}
            />
            {errors.title && (
              <small role="alert" className={styles.message}>
                {errors.title.message}
              </small>
            )}
          </div>

          {/* 원문링크 */}
          <div className={styles.section}>
            <label htmlFor="docUrl" className={styles.label}>
              원문링크
            </label>
            <input
              type="url"
              placeholder="원문 링크를 입력해주세요"
              {...register('docUrl', {
                required: '원문 링크는 필수 입니다.',
                pattern: {
                  value: /^https?:\/\/.+/,
                  message: '올바른 URL 형식을 입력해주세요',
                },
              })}
              aria-invalid={
                isSubmitted ? (errors.docUrl ? 'true' : 'false') : undefined
              }
              className={styles.input}
            />
            {errors.docUrl && (
              <small role="alert" className={styles.message}>
                {errors.docUrl.message}
              </small>
            )}
          </div>

          {/* 분야 카테고리 */}
          <div className={styles.section}>
            <label htmlFor="category" className={styles.label}>
              분야
            </label>
            <Controller
              name="category"
              control={control}
              rules={{ required: '분야 선택은 필수입니다' }}
              render={({ field }) => (
                <CategoryDropdown
                  onSelect={(value) => {
                    field.onChange(value);
                    clearErrors('category');
                  }}
                  options={['Next.js', 'API', 'Career', 'Modern JS', 'Web']}
                />
              )}
            />
            {errors.category && (
              <small role="alert" className={styles.message}>
                {errors.category.message}
              </small>
            )}
          </div>

          {/* 문서 타입 카테고리 */}
          <div className={styles.section}>
            <label htmlFor="documentType" className={styles.label}>
              문서타입
            </label>
            <Controller
              name="documentType"
              control={control}
              rules={{ required: '문서타입은 필수 입니다' }}
              render={({ field }) => (
                <CategoryDropdown
                  onSelect={(value) => {
                    field.onChange(value);
                    clearErrors('documentType');
                  }}
                  options={['공식문서', '블로그']}
                />
              )}
            />
            {errors.documentType && (
              <small role="alert" className={styles.message}>
                {errors.documentType.message}
              </small>
            )}
          </div>

          {/* 마감일 */}
          <div className={styles.section}>
            <label htmlFor="dueDate" className={styles.label}>
              마감일
            </label>
            <input
              type="date"
              placeholder="YY/MM/DD"
              {...register('dueDate', {
                required: '마감일은 필수 입니다',
                validate: (value) => {
                  return (
                    new Date(value) > new Date() ||
                    '마감일은 오늘 이후여야 합니다.'
                  );
                },
              })}
              aria-invalid={
                isSubmitted ? (errors.dueDate ? 'true' : 'false') : undefined
              }
              className={styles.input}
            />
            {errors.dueDate && (
              <small role="alert" className={styles.message}>
                {errors.dueDate.message}
              </small>
            )}
          </div>

          {/* 최대 인원 */}
          <div className={styles.section}>
            <label htmlFor="maxParticipants" className={styles.label}>
              최대 인원
            </label>
            <input
              type="number"
              placeholder="인원을 입력해주세요"
              {...register('maxParticipants', {
                required: '참여 인원수는 필수입니다',
                min: {
                  value: 5,
                  message: '최소 인원은 5명 입니다.',
                },
                max: {
                  value: 20,
                  message: '최대 인원은 20명 입니다',
                },
              })}
              aria-invalid={
                isSubmitted
                  ? errors.maxParticipants
                    ? 'true'
                    : 'false'
                  : undefined
              }
              className={styles.input}
            />
            {errors.maxParticipants && (
              <small role="alert" className={styles.message}>
                {errors.maxParticipants.message}
              </small>
            )}
          </div>

          {/* 내용 */}
          <div className={styles.section}>
            <label htmlFor="description" className={styles.label}>
              내용
            </label>
            <textarea
              placeholder="내용을 입력해주세요"
              {...register('description', {
                required: '내용은 필수 입니다.',

                maxLength: {
                  value: 150,
                  message: '최대 150자 까지 가능합니다.',
                },
              })}
              aria-invalid={
                isSubmitted
                  ? errors.description
                    ? 'true'
                    : 'false'
                  : undefined
              }
              className={styles.textarea}
            />
            {errors.description && (
              <small role="alert" className={styles.message}>
                {errors.description.message}
              </small>
            )}
          </div>

          {/* 신청하기 버튼 */}
          <button type="submit" disabled={isPending} className={styles.btn}>
            신청하기
          </button>
        </div>
      </form>
    </>
  );
}
