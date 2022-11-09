import "./css/mainComponent.css"
import React from 'react';
import {Link} from "react-router-dom";

const MainComponent = () => {
    return (
        <div className="navBar">
            <h2>turtle pizza admin</h2>
            <span className="links">
                <Link to="/dishes">dishes</Link>
                <i></i>
                <Link to="/orders">orders</Link>
            </span>
        </div>
    );
};

export default MainComponent;