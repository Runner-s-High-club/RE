import type { Metadata } from 'next';
import loginLayoutStyles from '@/app/login/styles/loginLayout.module.css';

export const metadata: Metadata = {
  title: '로그인',
  description: '로그인 페이지',
};

/** 로그인페이지 공통 레이아웃 */
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={loginLayoutStyles.loginSection}>{children}</div>;
}
