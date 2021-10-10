import Link from 'next/link'
import styles from './footer.module.css';
import utilStyles from '../../../styles/utils.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <p><Link href="/">Thirfty.com</Link> - 2021 - all rights reserved</p>
            <div className={utilStyles.flexRow}>
                <p>Privacy</p>
                <div style={{ width: '1rem' }}></div>
                <p>T&Cs</p>
            </div>
        </footer>
    )
}
