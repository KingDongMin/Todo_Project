import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function Todo({ todo, onUpdate, onDelete }) {
    const { id, name, status } = todo;

    const handleChange = e => {
        const checked = e.target.checked;
        todo = { ...todo, status: checked ? 'completed' : 'active' };
        onUpdate(todo);
    };

    const handleClick = () => onDelete(todo);

    return (
        <li>
            <input
                type="checkbox"
                id={id}
                onChange={handleChange}
                checked={status === 'completed' ? true : false}
            />
            <label htmlFor={id}>{name}</label>
            <button onClick={handleClick}>
                <FaTrashAlt></FaTrashAlt>
            </button>
        </li>
    );
}
