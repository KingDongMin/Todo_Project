import React, { useState } from 'react';
import styles from './TodosFilter.module.css';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function TodosFilter({ filters, onChange }) {
    const [dark, setDark] = useState(false);
    const handleClick = e => {
        const filter = e.target.value;
        onChange(filter);
    };
    const darkMode = () => {
        const darkStatus = dark ? 'light' : 'dark';
        document.documentElement.classList = darkStatus;
        setDark(!dark);
    };
    return (
        <nav className={styles.nav}>
            <button className={styles.icon} onClick={darkMode}>
                {darkModeIcon(dark)}
            </button>
            <ul className={styles.filters}>
                {filters.map((value, index) => (
                    <li className={styles.filter} key={index}>
                        <button
                            className={styles.button}
                            value={value}
                            onClick={handleClick}
                        >
                            {value}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

function darkModeIcon(dark) {
    return dark ? <BsSun></BsSun> : <BsMoon />;
}
