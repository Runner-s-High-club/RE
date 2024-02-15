import headerStyles from '@/components/layout/header/styles/header.module.css';

const Header = () => {
  return (
    <nav className={headerStyles.navContent}>
      <h1 id={headerStyles.logo}>RHC</h1>
      <ul id={headerStyles.menuBox}>
        <li className={headerStyles.menuItem}>HOME</li>
        <li className={headerStyles.menuItem}>클럽</li>
        <li className={headerStyles.menuItem}>챌린지</li>
      </ul>
    </nav>
  );
};

export default Header;
