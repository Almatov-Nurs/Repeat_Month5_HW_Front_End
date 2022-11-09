import axios from "axios"
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    pizza: {},
    orders: {}
}

export const GetPizza = createAsyncThunk("pizza/getPizza", async (_,{dispatch}) => {
    const response = await axios.get("https://pizza-dz-default-rtdb.asia-southeast1.firebasedatabase.app/pizza.json")
    response.data ? dispatch(getPizza(response.data)) : dispatch(getPizza({}))
})

export const patchPizza = createAsyncThunk('pizza/patchPizza', async ([id, pizza]) => {
    await axios.patch("https://pizza-dz-default-rtdb.asia-southeast1.firebasedatabase.app/pizza/"+id+".json", pizza);
})
export const deletePizza = createAsyncThunk('pizza/deletePizza', async (id)=> {
    await axios.delete("https://pizza-dz-default-rtdb.asia-southeast1.firebasedatabase.app/pizza/"+id+".json")
})

export const addPizza = createAsyncThunk('pizza/postPizza', async ([url, pizza]) => {
    await axios.post(`https://pizza-dz-default-rtdb.asia-southeast1.firebasedatabase.app/${url}.json`, pizza);
})

const pizzaReducer = createSlice({
    name: "pizza",
    initialState,
    reducers: {
        getPizza(state, action) {
            state.pizza = action.payload
        },
    }
})

export const { getPizza } = pizzaReducer.actions
export const pizzaSelect = (state) => state.pizza.pizza
export const ordersSelect = (state) => state.pizza.orders
export default pizzaReducer.reducer