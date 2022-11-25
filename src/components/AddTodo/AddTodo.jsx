import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';

export default function AddTodo({ onAdd }) {
    const [text, setText] = useState('');

    const handleChange = e => {
        const targetValue = e.target.value;
        setText(targetValue);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setText('');
        const textTrim = text.trim();
        if (textTrim.length === 0) {
            return;
        }
        onAdd({ id: uuidv4(), text: textTrim, status: 'active' });
    };

    return (
        <section className={styles.add}>
            <form onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    value={text}
                    onChange={handleChange}
                />
                <button className={styles.button}>Add</button>
            </form>
        </section>
    );
}
