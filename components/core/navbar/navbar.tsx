import Link from 'next/link';
import Badge from '@mui/material/Badge';

import { useStore } from '../../../stores/store';
import styles from './navbar.module.css';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

interface Props {
    page?: string;
}

export const Navbar = observer(function Navbar(props: Props) {
    const { cartStore } = useStore();
    const [cartCount, setCartCount] = useState<number | null>(null);

    const getActiveClass = (page?: string) => {
        let cls = '';
        if (page === props.page) cls = styles.active;
        return cls;
    }

    // We do this to work around the hydration warning.
    // really we just want to ensure that our cart count is persisted from
    // localStorage...
    useEffect(() => {
        setCartCount(cartStore.count);
    }, [cartStore.items]);

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbar}>
                <Link href="/"><a className={styles.mainNavItem}>Thrifty.com</a></Link>
                <div>
                    <Link href="/app/about"><a className={`${styles.navItem} ${getActiveClass('about')}`}>About</a></Link>
                    <Link href="/app/account"><a className={`${styles.navItem} ${getActiveClass('account')}`}>Account</a></Link>
                    <Badge className={styles.badge} badgeContent={cartCount} color="primary">
                        <Link href="/app/cart"><a className={`${styles.navItem} ${getActiveClass('cart')}`}>Cart</a></Link>
                    </Badge>
                </div>
            </div>
        </div>
    );
});
