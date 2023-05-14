import styles from '../public/css/navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.logo} href="Home">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width={50}
                    height={50}
                />
                <span>Alan Studio</span>
            </Link>
            <div className={styles.container}>
                <ul className={styles.menu}>
                    <li className={styles.menuItem}>
                        <a href="/">Home</a>
                    </li>
                    <li className={styles.menuItem}>
                        <a href="/about">Game</a>
                    </li>
                    <li className={styles.menuItem}>
                        <a href="/services">Social</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
