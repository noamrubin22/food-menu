import React from 'react';
import arrowUp from "./arrow-up.png";

function ItemDetails(props) {
    function handleChange() {
        props.setStadium("item")
    }
    return (
        <div>
            <div className="top-info">
                <div className="title-exp">{props.props.item}</div>
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
            <button className="view-btn" onClick={() => handleChange()}>VIEW IN 3D</button>
        </div>
    )
}

export default ItemDetails;