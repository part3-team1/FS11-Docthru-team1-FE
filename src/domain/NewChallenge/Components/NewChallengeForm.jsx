'use client';
import * as styles from './NewChallengeForm.css';
import { useForm } from 'react-hook-form';

export default function NewChallengeForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm();

  return (
    <>
      <form
        noValidate
        onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
      >
        <div className={styles.container}>
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
          </div>

          {/* 원문링크 */}
          <div className={styles.section}>
            {/* 제목 */}
            <label htmlFor="title" className={styles.label}>
              원문링크
            </label>
            <input
              type="url"
              placeholder="원문 링크를 입력해주세요"
              {...register('title', {
                required: '원문 링크는 필수 입니다.',
                pattern: {
                  value: /^https?:\/\/.+/,
                  message: '올바른 URL 형식을 입력해주세요',
                },
              })}
              aria-invalid={
                isSubmitted ? (errors.title ? 'true' : 'false') : undefined
              }
              className={styles.input}
            />
          </div>


          
        </div>
      </form>
    </>
  );
}
