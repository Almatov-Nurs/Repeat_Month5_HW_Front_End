import React from 'react';
import "./mainPage.css"
import {useDispatch, useSelector} from "react-redux";

const MainPage = () => {
    const dispatch = useDispatch()
    const code = useSelector(state => state)
    const input = document.getElementsByClassName("input")

    const handleClick = e => {
        dispatch({type: "new code", code: e.target.textContent})
        input[0].innerHTML = "*".repeat(code.newCode.length)
    }
    const handleDelete = () => {
        dispatch({type:"delete code"})
        input[0].innerHTML = "*".repeat(code.newCode.length)
    }
    const enter = () => {
        if (code.code !== code.newCode) {
            input[0].style.color = "red"
        } else {
            input[0].style.color = "green"
        }
        setTimeout(()=> input[0].style.color = "black", 250)
    }
    return (
        <div>
            <div className="block">
                <div className="input"></div>
                <div className="case">
                    <button onClick={handleClick}>7</button>
                    <button onClick={handleClick}>8</button>
                    <button onClick={handleClick}>9</button>
                </div>
                <div className="case">
                    <button onClick={handleClick}>4</button>
                    <button onClick={handleClick}>5</button>
                    <button onClick={handleClick}>6</button>
                </div>
                <div className="case">
                    <button onClick={handleClick}>1</button>
                    <button onClick={handleClick}>2</button>
                    <button onClick={handleClick}>3</button>
                </div>
                <div className="case">
                    <button onClick={handleDelete}>{"<"}</button>
                    <button onClick={handleClick}>0</button>
                    <button onClick={enter}>E</button>
                </div>
            </div>
        </div>
    );
};

export default MainPage;