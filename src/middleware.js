import { NextResponse } from 'next/server';

console.log('미들웨어 파일 로딩됨!');
export function middleware(request) {
  console.log('middleware 실행됨!');

  const { pathname } = request.nextUrl;
  const token = request.cookies.get('accessToken');
  console.log(request.cookies); // 전체 쿠키 Map 찍어보기

  // 비회원 허용 화이트리스트
  const isPublic =
    pathname === '/' ||
    pathname === '/challenges' ||
    (/^\/challenges\/[^/]+$/.test(pathname) &&
      pathname !== '/challenges/new') ||
    pathname.startsWith('/login') ||
    pathname.startsWith('/signup');

  // 로그인된 유저 login/signup 접근 막기
  if (
    token &&
    (pathname.startsWith('/login') || pathname.startsWith('/signup'))
  ) {
    return NextResponse.redirect(new URL('/challenges', request.url));
  }

  if (isPublic) return NextResponse.next();

  // 로그인 안했으면 로그인 페이지로 리다이렉트
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// 어떤 경로에서 middleware를 실행할지
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)']
};