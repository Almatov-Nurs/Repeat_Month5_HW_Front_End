import React from 'react';
import "./css/OrderPizza.css"
import {useSelector} from "react-redux";
import {ordersSelect} from "../../redux/slice/pizzaSlice/PizzaSlice";

const OrderPizza = () => {
    const orders = useSelector(ordersSelect);
    console.log(orders)
    return (
        <div className="order">
            <div><h1>orders</h1></div>
        </div>
    );
};

export default OrderPizza;