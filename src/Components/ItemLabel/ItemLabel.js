import React, {
    useLayoutEffect,
    useState
} from 'react';
import arrow from "./arrow.png";
import arrowUp from "./arrow-up.png";
import burger from "./burger.png"
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
                    <p className="item-titles">{props.item}</p>
                </div>
                <div onClick={() => props.handleChange(props.index)}><img className="arrow" src={arrow} alt="Arrow" /></div>
            </div>
        );
    } else {
        return (
            <div className="item-label-exp">
                <div className="top-info">
                    <div className="title-exp">{props.item}</div>
                    <div onClick={() => props.handleChange(props.index)}><img className="arrow" src={arrowUp} alt="Arrow" /></div>
                </div>
                <div className="middle-info">
                    <img className="burger-img" alt="Burger" />
                    <div className="item-description">
                        <div className="ing">Rind, tomate, zwiebel, salat, gurke, haus-sauce</div>
                        <div className="price">
                            <p><b>6,50€</b></p>
                            <p><b>(+40 cent cheese)</b></p>
                        </div>
                    </div>
                </div>
                <button className="view-btn" onClick={handleChange}>VIEW IN 3D</button>
            </div>
        )
    }
}

export default ItemLabel;