import React from 'react'
import utilStyles from '../../styles/utils.module.css';
import styles from './searchbar.module.css';

export default function SearchBar() {
    return (
        <div className={utilStyles.flexRow}>
            <input className={styles.searchInput} placeholder="What can we help you with?"/>
            <div style={{ width: '1rem' }}></div>
            <button id={styles.gradient}  className={utilStyles.btnPrimary}>Shop now!</button>
        </div>
    )
}
