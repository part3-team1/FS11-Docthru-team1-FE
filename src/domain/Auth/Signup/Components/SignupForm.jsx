'use client';
import { useForm } from 'react-hook-form';

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm();
  return (
    <form>
      <div>
        {/* 이메일 */}
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
    </form>
  );
}
