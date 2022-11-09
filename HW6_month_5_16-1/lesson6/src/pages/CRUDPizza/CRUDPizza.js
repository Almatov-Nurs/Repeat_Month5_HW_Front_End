import React, {useEffect, useState} from 'react';
import "./css/CRUDPizza.css"
import {useDispatch, useSelector} from "react-redux";
import {addPizza, deletePizza, GetPizza, patchPizza, pizzaSelect} from "../../redux/slice/pizzaSlice/PizzaSlice";
import {Box, Modal} from "@mui/material";

const CrudPizza = () => {
    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")
    const [modal, setModal] = useState(false)
    const [editBtn, setEditBtn] = useState(["",""])
    const [order, setOrder] = useState("");

    const dispatch = useDispatch();
    const pizza = useSelector(pizzaSelect);
    console.log(order)

    const openModal = (t, p, i, k) => {
        setEditBtn(["active", ""])
        setTitle(t)
        setPrice(p)
        setImage(i)
        setId(k)
        setModal(true)
    }

    const handlePatch = async () => {
        await dispatch(patchPizza([id, {
            title: title,
            price: price,
            image: image
        }]));
        dispatch(GetPizza());
        setModal(false)
        setTitle("")
        setPrice(0)
        setImage("")
    }
    const handleDelete = async id => {
        await dispatch(deletePizza(id));
        dispatch(GetPizza());
    };

    const handleAdd = async () => {
        await dispatch(addPizza([ "pizza",{
            title: title,
            price: price,
            image: image
        }]))
        dispatch(GetPizza());
        setModal(false)
    };

    const handleOrder = async key => {
        order[key] ? setOrder({...order, [key]: order[key] + 1}) : setOrder({...order, [key]: 1});
        // await dispatch(addPizza([ "order", order]))
    }

    useEffect(() => {
        dispatch(GetPizza())
    },[dispatch])
    return (
        <div className="dish">
            <div className="nav"><h1>Dishes</h1><button onClick={()=> {
                setModal(true)
                setEditBtn(["", "active"])
            }}>Add New Dish</button></div>
            <ul>
                {
                    Object.keys(pizza).map(key => <li key={key}>
                        <span className="left" style={{cursor:"default"}} onClick={()=>handleOrder(key)}>
                            <img src={pizza[key].image} alt=""/>
                            <span>{pizza[key].title}</span>
                        </span>
                            <span className="right">
                            <span>{pizza[key].price} KGS</span>
                            <button onClick={()=>openModal(pizza[key].title, pizza[key].price, pizza[key].image, key)}>Edit</button>
                            <button onClick={()=>handleDelete(key)}>Delete</button>
                        </span>
                    </li>)
                }
                <Modal style={{display:"flex",justifyContent:"center",alignItems:"center"}} open={modal} onClose={()=> {
                    setModal(false)
                    setTitle("")
                    setPrice(0)
                    setImage("")
                }}>
                    <Box className="modal">
                        <span>
                            <label>Title</label>
                            <input onChange={e=>setTitle(e.target.value)} value={title} type="text"/>
                        </span>
                        <span>
                            <label>Price</label>
                            <input onChange={e=>setPrice(e.target.value)} value={price} type="number"/>
                        </span>
                        <span>
                            <label>URL</label>
                            <input onChange={e=>setImage(e.target.value)} value={image} type="text"/>
                        </span>
                        <button onClick={handleAdd} className={editBtn[0]}>Add</button>
                        <button onClick={handlePatch} className={editBtn[1]}>Edit</button>
                    </Box>
                </Modal>
            </ul>
        </div>
    );
};

export default CrudPizza;