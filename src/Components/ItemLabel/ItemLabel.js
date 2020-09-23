import React, {
    useState
} from 'react';

import "./ItemLabel.css"

function ItemLabel(props) {

    function handleChange() {
        console.log(props)
        props.setStadium("varietu")
    }

    if (!props.isChosen) {
        return (
            <div className="item-label">
                <div className="label-description">
                    <img src={props.img} alt={props.item} />
                    <h3>{props.item}</h3>
                </div>
                <button onClick={() => props.handleChange(props.index)}>x</button>
            </div>
        );
    } else {
        return (
            <div className="item-label-exp">
                <div className="top-info">
                    <div className="title-exp">{props.item}</div>
                    <button onClick={() => props.handleChange(props.index)}>x</button>
                </div>
                <div className="middle-info">
                    <div className="img"></div>
                    <div className="item-description">
                        <div className="ing">Rind, tomate, zwiebel, salat, gurke, haus-sauce</div>
                        <div className="price">
                            <p><b>6,50€</b></p>
                            <p><b>+40 cent cheese</b></p>
                        </div>
                    </div>
                </div>
                <button className="view-btn" onClick={handleChange}>VIEW IN 3D</button>
            </div>
        )
    }
}

export default ItemLabel;