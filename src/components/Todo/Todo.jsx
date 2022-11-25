import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo({ todo, onUpdate, onDelete }) {
    const { id, text, status } = todo;

    const handleChange = e => {
        const checked = e.target.checked;
        todo = { ...todo, status: checked ? 'completed' : 'active' };
        onUpdate(todo);
    };

    const handleClick = () => onDelete(todo);

    return (
        <li className={styles.todo}>
            <article className={styles.article}>
                <input
                    className={styles.checkbox}
                    type="checkbox"
                    id={id}
                    onChange={handleChange}
                    checked={status === 'completed' ? true : false}
                />
                <label className={styles.label} htmlFor={id}>
                    {text}
                </label>
            </article>
            <button className={styles.button} onClick={handleClick}>
                <FaTrashAlt></FaTrashAlt>
            </button>
        </li>
    );
}
