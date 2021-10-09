import Link from 'next/link';
import styles from './navbar.module.css';

export function Navbar() {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbar}>
                <Link href="/"><a>Simple Store</a></Link>
                <div>
                    <a href="/app/about" className={styles.navItem}>About</a>
                    <a href="/app/account" className={styles.navItem}>Account</a>
                    <a href="/app/cart" className={styles.navItem}>Cart</a>
                </div>
            </div>
        </div>
    );
}