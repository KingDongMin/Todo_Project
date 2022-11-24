import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
        onAdd({ id: uuidv4(), name: textTrim, status: 'active' });
    };

    return (
        <footer>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={handleChange} />
                <button>Add</button>
            </form>
        </footer>
    );
}
