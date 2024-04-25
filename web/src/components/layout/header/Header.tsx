'use client';
import headerStyles from '@/components/layout/header/styles/header.module.css';
import MenuIcon from '@/assets/icon/menu.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

/** header 컴포넌트 */
const Header = () => {
  const router = useRouter();

  /** 라우터 핸들러 */
  const routerHandler = (path: string) => {
    router.push(path);
  };
  return (
    <nav className={headerStyles.navbar}>
      <div className={headerStyles.navContent}>
        <h1 id={headerStyles.logo}>RHC</h1>
        <ul id={headerStyles.menuBox}>
          <li
            className={headerStyles.menuItem}
            onClick={() => routerHandler('/login')}
          >
            클럽
          </li>
          <li
            className={headerStyles.menuItem}
            onClick={() => routerHandler('/login')}
          >
            챌린지
          </li>
          <li
            className={headerStyles.menuItem}
            onClick={() => routerHandler('/login')}
          >
            로그인
          </li>
        </ul>
        <button className={headerStyles.mobileMenuButton}>
          <Image src={MenuIcon} alt='menuIcon' />
        </button>
      </div>
    </nav>
  );
};

export default Header;
