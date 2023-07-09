import styles from '../public/css/navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className={styles.navbar} data-theme="light">
            <Link className={styles.logo} href="/">
                <Image
                    src="icon/logo.svg"
                    alt="logo"
                    width={50}
                    height={50}
                />
                <span>Alan Studio</span>
            </Link>
            <div className={styles.container}>
                <ul className={styles.menu}>
                    <li className={styles.menuItem}>
                        <Link className={styles.Item_Link} href="/">Home</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link className={styles.Item_Link} href="/game">Game</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link className={styles.Item_Link} href="/social">Social</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
