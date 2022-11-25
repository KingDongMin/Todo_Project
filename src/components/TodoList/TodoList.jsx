import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
    const [todos, setTodos] = useState(() => getLocalTodos());

    const filteredTodos = todosfiltering(todos, filter);

    const handleAdd = updated => {
        setTodos(prev => [...prev, updated]);
    };

    const handleUpdate = updated => {
        setTodos(todos.map(todo => (todo.id === updated.id ? updated : todo)));
    };

    const handleDelete = deleted =>
        setTodos(todos.filter(todo => todo.id !== deleted.id));

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <section className={styles.todoList}>
            <ul className={styles.todos}>
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

function getLocalTodos() {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}
