import React, { useState } from 'react';
import burger from "./burger.png";
import arrow from "./arrow.png";
import "./CategoryLabel.css"

function CategoryLabel(props) {
    function handleChange() {
        props.setStadium("category");
        props.setKitchen(props.category);
    }

    return (
        <div className="category-label">
            <div className="label-description">
                <img className="img-burger" src={burger} alt={props.category} />
                <p className="cat-title">{props.category}</p>
            </div>
            <div onClick={handleChange}>
                <img className="arrow-start" src={arrow} alt="Arrow" />
            </div>
        </div>
    )
}

export default CategoryLabel;