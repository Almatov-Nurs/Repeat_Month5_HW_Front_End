import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
  todos: [],
  todo: "",
};

export const newTodo = createAsyncThunk("newTod", (todo, {dispatch})=> dispatch(setTodo(todo)));
export const addTodo = createAsyncThunk("addTod", (todos, {dispatch})=> dispatch(setTodos(todos)));

export const todosSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
    setTodos: (state, action) =>{
      state.todos = action.payload
      state.todo = ""
}
  },
});

export default todosSlice.reducer;

export const { setTodo, setTodos } = todosSlice.actions;
