import type { Metadata } from 'next';
import joinLayoutStyles from '@/app/join/styles/joinLayout.module.css';

export const metadata: Metadata = {
  title: '회원가입',
  description: '회원가입 페이지',
};

/** 회원가입 공통 레이아웃 */
export default function JoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={joinLayoutStyles.joinSection}>{children}</div>;
}
