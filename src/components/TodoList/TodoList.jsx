import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList({ filter }) {
    const [todos, setTodos] = useState([
        { id: 123, name: '장보기', status: 'active' },
        { id: 1234, name: '공부하기', status: 'active' },
    ]);

    const filteredTodos = todosfiltering(todos, filter);

    const handleAdd = updated => {
        setTodos(prev => [...prev, updated]);
    };

    const handleUpdate = updated => {
        setTodos(todos.map(todo => (todo.id === updated.id ? updated : todo)));
    };

    const handleDelete = deleted =>
        setTodos(todos.filter(todo => todo.id !== deleted.id));

    return (
        <section>
            <ul>
                {filteredTodos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
            <AddTodo onAdd={handleAdd}></AddTodo>
        </section>
    );
}

function todosfiltering(todos, filter) {
    return [
        ...todos.filter(todo =>
            filter === 'all' ? todo : todo.status === filter
        ),
    ];
}
