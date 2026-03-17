'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors, watch },
  } = useForm();
  const [showPassowrd, setShowPassword] = useState(false);
  const togglePassword = (e) => {
    setShowPassword((prev) => !prev);
  };
  return (
    <form>
      {/* 이메일 */}
      <div>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          {...register('email', {
            required: '이메일은 필수 입력입니다.',
            pattern: {
              value: /\S+@\s+\.\s+/,
              message: '이메일 형식에 맞지 않습니다.',
            },
          })}
          aria-invalid={
            isSubmitted ? (errors.email ? 'true' : 'false') : undefined
          }
        />
        {errors.email && <small role="alert">{errors.email.message}</small>}
      </div>

      {/* 닉네임 */}
      <div>
        <label htmlFor="nickName">닉네임</label>
        <input
          id="nickName"
          type="text"
          placeholder="닉네임을 입력해주세요"
          {...register('nickName', {
            required: '닉네임은 필수 입력입니다.',
            pattern: {
              value: 2,
              message: '닉네임은 2자 이상 작성해주세요.',
            },
          })}
          aria-invalid={
            isSubmitted ? (errors.nickName ? 'true' : 'false') : undefined
          }
        />
        {errors.nickName && (
          <small role="alert">{errors.nickName.message}</small>
        )}
      </div>

      {/* 비밀번호*/}
      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type={showPassowrd ? 'text' : 'password'}
          placeholder="비밀번호를 입력해주세요"
          {...register('password', {
            register: '비밀번호는 필수 입력입니다.',
            pattern: {
              value: 8,
              message: '비밀번호가 틀렸습니다.',
            },
          })}
          aria-invalid={
            isSubmitted ? (errors.password ? 'true' : 'false') : undefined
          }
        />
        <Image
          src={
            showPassowrd
              ? '/images/icon/password-eye.svg'
              : '/images/icon/passwordOn-eye.svg'
          }
          alt="비밀번호 확인"
          width={24}
          height={24}
          onClick={togglePassword}
        />
        {errors.password && (
          <small role="alert">{errors.password.message}</small>
        )}
      </div>

      {/* 비밀번호 확인 */}
      <div>
        <label>비밀번호 확인</label>
        <input
          id="passwordConfirm"
          type={showPassowrd ? 'text' : 'password'}
          placeholder="비밀번호를 한번 더 입력해주세요"
          {...register('passwordConfirm', {
            validate: (value) =>
              value === watch('password') || '비밀번호가 일치하지 않습니다.',
          })}
          aria-invalid={
            isSubmitted
              ? errors.passwordConfirm
                ? 'true'
                : 'false'
              : undefined
          }
        />
        <Image
          src={
            isSubmitting
              ? '/images/icon/password-eye.svg'
              : '/images/icon/paawordOn-eye.svg'
          }
          alt="비밀번호 확인"
          width={24}
          height={24}
          onClick={togglePassword}
        />
      </div>

      {/* 회원가입버튼 */}
      <div>
        <button type="submit" disabled={isSubmitting}>
          회원가입
        </button>
      </div>

      {/* 구글회원가입버튼 */}
      <div>
        <button>
          <Image
            src="/images/icon/google.svg"
            alt="구글 회원가입"
            width={19}
            height={19}
          />
          Google 간편 회원가입
        </button>
      </div>
    </form>
  );
}
