import React from 'react';

export default function TodosFilter({ filters, onChange }) {
    const handleClick = e => {
        const filter = e.target.value;
        onChange(filter);
    };
    return (
        <nav>
            <ul>
                {filters.map((value, index) => (
                    <li key={index}>
                        <button value={value} onClick={handleClick}>
                            {value}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
