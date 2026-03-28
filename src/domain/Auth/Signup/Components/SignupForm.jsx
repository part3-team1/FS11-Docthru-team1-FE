'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as styles from './SignupForm.css';
import { signup } from '@/api/authAPI';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/Providers/AuthProvider';

export default function SignupForm() {
  const router = useRouter();
  const { setUser } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm();
  const passwordValue = watch('password');
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (data) => {
    try {
      const { passwordConfirm, ...rest } = data;
      const res = await signup(rest);
      setUser(res.data);
      router.push('/challenges');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
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

        {/* 닉네임 */}
        <div className={styles.section}>
          <label htmlFor="nickName" className={styles.label}>
            닉네임
          </label>
          <input
            id="nickname"
            type="text"
            placeholder="닉네임을 입력해주세요"
            {...register('nickname', {
              required: '닉네임은 필수 입력입니다.',
              minLength: {
                value: 2,
                message: '닉네임은 2자 이상 작성해주세요.',
              },
            })}
            aria-invalid={
              isSubmitted ? (errors.nickname ? 'true' : 'false') : undefined
            }
            className={styles.input}
          />
          {errors.nickname && (
            <small role="alert" className={styles.message}>
              {errors.nickname.message}
            </small>
          )}
        </div>

        {/* 비밀번호*/}
        <div className={styles.section}>
          <label htmlFor="password" className={styles.label}>
            비밀번호
          </label>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="비밀번호를 입력해주세요"
            {...register('password', {
              required: '비밀번호는 필수 입력입니다.',
              minLength: {
                value: 8,
                message: '8자 이상 작성해주세요',
              },
              maxLength: {
                value: 12,
                message: '12자 이하로 작성해주세요',
              },
              validate: (value) =>
                /[~!@#$%^&*]/.test(value) ||
                '특수문자(~!@#$%^&*)를 하나 이상 포함해야 합니다.',
            })}
            aria-invalid={
              isSubmitted ? (errors.password ? 'true' : 'false') : undefined
            }
            className={styles.input}
          />
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

        {/* 비밀번호 확인 */}
        <div className={styles.section}>
          <label htmlFor="passwordConfirm" className={styles.label}>
            비밀번호 확인
          </label>
          <input
            id="passwordConfirm"
            type={showPassword ? 'text' : 'password'}
            placeholder="비밀번호를 한번 더 입력해주세요"
            {...register('passwordConfirm', {
              required: '비밀번호는 필수 입력입니다.',
              validate: (value) =>
                value === passwordValue || '비밀번호가 일치하지 않습니다.',
            })}
            aria-invalid={
              isSubmitted
                ? errors.passwordConfirm
                  ? 'true'
                  : 'false'
                : undefined
            }
            className={styles.input}
          />
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
          {errors.passwordConfirm && (
            <small role="alert" className={styles.message}>
              {errors.passwordConfirm.message}
            </small>
          )}
        </div>

        {/* 회원가입버튼 */}

        <button
          type="submit"
          disabled={isSubmitting}
          className={styles.loginBtn}
        >
          회원가입
        </button>
      </div>
      {/* 구글회원가입버튼 */}

      <button type="button" className={styles.googleBtn}>
        <Image
          src="/images/icon/google.svg"
          alt="구글 회원가입"
          width={19}
          height={19}
        />
        Google 간편 회원가입
      </button>
    </form>
  );
}
