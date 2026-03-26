'use client';
import { useForm } from 'react-hook-form';
import * as styles from './LoginForm.css.js';
import Image from 'next/image.js';
import { useState } from 'react';
import { useRouter } from 'next/navigation.js';
import { userLogin } from '@/api/authAPI.js';

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, SetServerError] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (data) => {
    try {
      SetServerError(false);
      await userLogin(data);
      router.push('/challenges');
    } catch (error) {
      SetServerError(true);
      console.error(error);
    }
  };

  return (
    <form
      noValidate
      // 이거 확인용임.. 추후 지울예정
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.container}>
        {/* 이메일 */}

        <div className={styles.section}>
          <label htmlFor="email" className={styles.label}>
            이메일
          </label>
          <input
            id="email"
            type="email"
            placeholder="이메일을 입력해주세요"
            {...register('email', {
              required: '이메일은 필수 입력입니다.',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: '이메일 형식에 맞지 않습니다.',
              },
            })}
            // error이면 테두리 빨간색 짜잔
            // 맞는 양식이면 초록색 짜잔
            aria-invalid={
              isSubmitted ? (errors.email ? 'true' : 'false') : undefined
            }
            className={styles.input}
          />
          {/* error 상황시 나오는 메세지 input 하단에 나옴 */}
          {errors.email && (
            <small role="alert" className={styles.message}>
              {errors.email.message}
            </small>
          )}
        </div>

        {/* 비밀번호 */}
        <div className={styles.section}>
          <label htmlFor="password" className={styles.label}>
            비밀번호
          </label>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="비밀번호를 입력해주세요"
            {...register('password', {
              required: '비밀번호는 필수 입니다.',
              minLength: {
                // 임시 비밀번호 제한 글자 수
                value: 8,
                message: '비밀번호가 틀렸습니다.',
              },
              onChange: () => SetServerError(false),
            })}
            // error이면 테두리 빨간색 짜잔
            // 맞는 양식이면 초록색 짜잔
            aria-invalid={
              isSubmitted
                ? errors.password || serverError
                  ? 'true'
                  : 'false'
                : undefined
            }
            className={styles.input}
          />
          {/* 눈 아이콘 */}

          <Image
            src={
              showPassword
                ? '/images/icon/passwordOn-eye.svg'
                : '/images/icon/password-eye.svg'
            }
            alt="비밀번호 확인"
            width={24}
            height={24}
            onClick={togglePassword}
            className={styles.passwordBtn}
          />
          {/* error 상황시 나오는 메세지 input 하단에 나옴 */}
          {errors.password && (
            <small role="alert" className={styles.message}>
              {errors.password.message}
            </small>
          )}
          {serverError && (
            <small role="alert" className={styles.message}>
              이메일 또는 비밀번호가 올바르지 않습니다.
            </small>
          )}
        </div>

        {/* 로그인 버튼 */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={styles.loginBtn}
        >
          로그인
        </button>
      </div>
      {/* 구글 */}
      <button type="button" className={styles.googleBtn}>
        <Image
          src="/images/icon/google.svg"
          alt="구글아이콘"
          width={19}
          height={19}
        />
        Google로 시작하기
      </button>
    </form>
  );
}
