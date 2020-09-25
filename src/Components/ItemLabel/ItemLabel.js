import React, {
    useLayoutEffect,
    useState
} from 'react';
import arrow from "./arrow.png";
import arrowUp from "./arrow-up.png";
import burger from "./burger.png"
import ar from "./ar.png";
import "./ItemLabel.css"
import { CSSTransition } from 'react-transition-group';

function ItemLabel(props) {

    function handleChange() {
        console.log(props)
        props.setStadium("item")
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
                    <img className="burger-img" src={"./burger3.png"} alt="Burger" />
                    <div className="item-description">
                        <div className="ing">Rind, tomate, zwiebel, salat, gurke, haus-sauce</div>
                        <div className="price">
                            <p id="text"><b>6,50€<br></br><span id="sub-title">(+40 cent cheese)</span>
                            </b></p>
                        </div>
                    </div>
                </div>
                <button className="view-btn" onClick={handleChange}>VIEW IN 3D</button>
            </div>
        )
    }
}

export default ItemLabel;