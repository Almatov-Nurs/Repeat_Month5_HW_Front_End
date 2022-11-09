import pizza from "./slice/pizzaSlice/PizzaSlice"
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        pizza: pizza
    }
})