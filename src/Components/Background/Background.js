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

    function handleChange(index) {
        let newItems = items.map((item, i) => {
            if (i === index) {
                item.isChosen = !item.isChosen;
                return item;
            } else {
                item.isChosen = false;
                return item;
            }
        })
        setItems(newItems);
    }

    function goBack(stadium) {
        if (stadium === "category") {
            setStadium("start");
            console.log("set stadium");
        } else if (stadium !== "item-info") {
            setStadium("category");
            console.log("heeeeee")
        }
    }

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
            <div className="background category">
                <button onClick={() => { goBack(stadium) }}>x</button>
                <div className="title">
                    <h2>{kitchen}</h2>
                </div>
                <div className="menu-items">
                    {items.map((item, index) => (
                        <ItemLabel key={index} index={index} item={item.title} img={item.img} isChosen={item.isChosen} handleChange={handleChange} setStadium={setStadium} />
                    ))}
                </div>
            </div>
        )
    } else {
        return (
            <div className="item-info">
                <div className="item-description">
                    <button onClick={() => { goBack(stadium) }}>x</button>
                    <div className="text">
                        <div className="item-title">title</div>
                        <div className="price-title">6,50</div>
                    </div>
                    <div className="ingr">Rind, tomate, zwiebel, salat, gurke, haus-sauce</div>
                </div>
                <div className="img3d">
                    <button className="view-btn-end">VIEW IN 3D</button>
                </div>
                <hr />
                <div className="calories">
                    <ul><li>Meat ............................................ 143 kcal</li>
                        <li>Tomatoes ...................................... 18 kcal</li>
                        <li>Salad ............................................. 15 kcal</li>

                        <li>Ketchup ......................................... 23 kcal</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Background;