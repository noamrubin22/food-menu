import React, {
  useState
} from 'react';
import Background from "./Components/Background/Background"

function App() {
  const [category, setCategory] = useState([]);

  return (
    <div className="app">
      <Background />
      <div className="category-list">
        <li>Burger</li>
        <li>Fried</li>
        <li>Salad</li>
        <li>Drinks</li>
        <li>Dessert</li>
      </div>
    </div>
  )
}

export default App;