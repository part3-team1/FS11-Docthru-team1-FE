'use client';
import { useForm } from 'react-hook-form';
import * as styles from './LoginForm.css.js';
import Image from 'next/image.js';
import { useState } from 'react';
import { useRouter } from 'next/navigation.js';
import { useLogin } from '../../hooks/useLogin.js';
import { googleLogin } from '@/api/authAPI.js';
import password_eye from '@/../public/Images/Icon/password-eye.svg';
import password_on_eye from '@/../public/Images/Icon/passwordOn-eye.svg';
import ic_google from '@/../public/Images/Icon/google.svg';

export default function LoginForm() {
  const router = useRouter();
  const { mutate: login, isPending } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = (data) => {
    setServerError(false);
    login(data, {
      onSuccess: (data) => {
        const role = data.data.role;
        if (role === 'ADMIN' || role === 'MASTER') {
          router.push('/admin/challenge-management');
        } else {
          router.push('/challenges');
        }
      },
      onError: () => setServerError(true),
    });
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
              onChange: () => setServerError(false),
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
            src={showPassword ? { password_on_eye } : { password_eye }}
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
      <button
        type="button"
        onClick={() => googleLogin()}
        className={styles.googleBtn}
      >
        <Image src={ic_google} alt="구글아이콘" width={19} height={19} />
        Google로 시작하기
      </button>
    </form>
  );
}
