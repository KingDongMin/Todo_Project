import React from 'react';
import styles from './TodosFilter.module.css';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useDarkModeContext } from '../../context/DarkModeContext';

export default function TodosFilter({ filters, filter, onChange }) {
    const { darkMode, toggleDarkMode } = useDarkModeContext();

    const handleToggle = () => {
        toggleDarkMode();
    };

    return (
        <nav className={styles.nav}>
            <button className={styles.icon} onClick={handleToggle}>
                {darkMode && <BsMoon />}
                {!darkMode && <BsSun></BsSun>}
            </button>
            <ul className={styles.filters}>
                {filters.map((value, index) => (
                    <li
                        className={`${styles.filter} ${
                            filter === value && styles.selected
                        }`}
                        key={index}
                    >
                        <button
                            className={styles.button}
                            onClick={() => onChange(value)}
                        >
                            {value}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
