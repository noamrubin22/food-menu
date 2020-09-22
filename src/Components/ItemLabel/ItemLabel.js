import React, {
    useState
} from 'react';

import "./ItemLabel.css"

function ItemLabel(props) {
    const [chosenItem, setChosenItem] = useState("")
    let isChosen = props.isChosen;

    function handleChange() {
        setChosenItem(props.item);
        console.log(isChosen)
        isChosen = !isChosen;
    }

    return (
        <div className="item-label">
            <div className="label-description">
                <img src={props.img} alt="burger" />
                <h3>{props.item}</h3>
            </div>
            <button onClick={handleChange}>x</button>
            {/* <div className="label-description">
                <img src="./burger.svg" alt="burger" />
                <h3>{props.item}</h3>
            </div>
            <button onClick={handleChange}>x</button> */}
        </div>
    );
}

export default ItemLabel;