'use client';
import { useForm } from 'react-hook-form';
import * as styles from './LoginForm.css.js';
import Image from 'next/image.js';
import { useState } from 'react';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
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
            aria-invalid={
              isSubmitted ? (errors.email ? 'true' : 'false') : undefined
            }
            className={styles.input}
          />
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
                value: 8,
                message: '비밀번호가 틀렸습니다.',
              },
            })}
            aria-invalid={
              isSubmitted ? (errors.password ? 'true' : 'false') : undefined
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

          {errors.password && (
            <small role="alert" className={styles.message}>
              {errors.password.message}
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
