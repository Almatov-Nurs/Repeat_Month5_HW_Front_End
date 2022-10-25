import React from 'react';

const TodoList = () => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    return (
        <ul>
            {todos.map((todo, key)=><li key={key}>{todo}</li>)}
        </ul>
    );
};

export default TodoList;