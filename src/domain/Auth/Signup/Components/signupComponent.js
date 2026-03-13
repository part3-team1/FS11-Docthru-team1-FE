export default function SignupForm() {
  return (
    <form>
      <div>
        <label htmlFor="email">이메일</label>
        <input id="email" type="email" placeholder="이메일을 입력하세요" />
      </div>

      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
      </div>

      <div>
        <label htmlFor="nickname">닉네임</label>
        <input id="nickname" type="text" placeholder="닉네임을 입력하세요" />
      </div>

      <button type="submit">회원가입</button>
    </form>
  );
}
