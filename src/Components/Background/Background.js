/* eslint-disable */

import React, {
    useState
} from 'react';

import "./Background.css"
import CategoryLabel from "../CategoryLabel/CategoryLabel";
import ItemLabel from "../ItemLabel/ItemLabel";

function Background() {
    const [stadium, setStadium] = useState("start");
    const [kitchen, setKitchen] = useState("");
    const [categories, setCategories] = useState([
        {
            title: "Burger",
            isChosen: false
        },
        {
            title: "Fried",
            isChosen: false
        },
        {
            title: "Salad",
            isChosen: false
        },
        {
            title: "Drinks",
            isChosen: false
        },
        {
            title: "Dessert",
            isChosen: false
        },
        {
            title: "Vegetarian",
            isChosen: false
        },
    ]);
    const [items, setItems] = useState([
        {
            title: "Classic",
            isChosen: false
        },
        {
            title: "Chef",
            isChosen: false
        },
        {
            title: "Gorgonzo",
            isChosen: false
        },
        {
            title: "Crispy turkey",
            isChosen: false
        },
        {
            title: "Halloumi",
            isChosen: false
        },
        {
            title: "Vegy",
            isChosen: false
        },
    ]);

    console.log(stadium);
    if (stadium === "start") {
        return (
            <div className="background">
                <div className="title">
                    <h2>GOLDEN</h2>
                </div>
                <div className="menu-categories">
                    {categories.map((category, index) => (
                        <CategoryLabel key={index} index={index} category={category.title} stadium={stadium} setStadium={setStadium} setKitchen={setKitchen} />
                    ))}
                </div>
            </div>
        )
    } else if (stadium === "category") {
        return (
            <div className="background">
                <div className="title">
                    <h2>{kitchen}</h2>
                </div>
                <div className="menu-items">
                    {items.map((item, index) => (
                        <ItemLabel key={index} index={index} item={item.title} img={item.img} isChosen={item.isChosen} setItems={setItems} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Background;