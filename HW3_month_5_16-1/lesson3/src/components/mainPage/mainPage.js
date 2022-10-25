import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {newTodo, addTodo} from "../../redux/todos/todosSlice";
import TodoList from "../../pages/todolist/todoList";

const MainPage = () => {
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todos.todo);
    const todos = JSON.parse(localStorage.getItem("todos"));

    const handleChange = e => {
        dispatch(newTodo(e.target.value));
    };
    const addTodo_ = () => {
        todo.length > 0 ? localStorage.setItem("todos", JSON.stringify([...todos, todo])) : alert("Поле заполнения пустое!");
        dispatch(addTodo(todos));
    };

    useEffect(()=> {
        dispatch(addTodo(todos));
    },[]);

    return (
        <div>
            <input type="text" onChange={handleChange} value={todo}/>
            <button onClick={addTodo_}>add</button>
            <TodoList/>
        </div>
    );
};

export default MainPage;