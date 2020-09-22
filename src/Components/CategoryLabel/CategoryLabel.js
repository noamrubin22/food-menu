import React, { useState } from 'react';

import "./CategoryLabel.css"

function CategoryLabel(props) {
    function handleChange() {
        props.setStadium("category");
        props.setKitchen(props.category);
    }


    console.log(props.stadium)
    return (
        <div className="category-label">
            <div className="label-description">
                <img src="./burger.svg" alt={props.category} />
                {props.category}
            </div>
            <button onClick={handleChange}>x</button>
        </div>
    )
}

export default CategoryLabel;