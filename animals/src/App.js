import './App.css'
import Animal from "./AnimalShow";
import { useState } from "react";

function getRandomAnimal() {
  const animals = ["dog", "cat", "horse", "gator", "bird", "heart", "cow"];
  return animals[Math.floor(Math.random() * animals.length)];
}

const App = () => {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    return setAnimals([...animals, getRandomAnimal()])
  }

  const renderedAnimals = animals.map((animal, index) => {
    return <Animal type={animal} key ={index}/>
  })
  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animal</button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  );
};

export default App;

//updating state is only done using the setter function
//Calling the setter function causes the React to rerender the component
