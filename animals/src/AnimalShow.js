import './AnimalShow.css';
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";
import { useState } from "react";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
  heart,
};
const AnimalShow = ({ type }) => {
  const [click, setClick] = useState(0);

  const handleClick = () => {
    return setClick(click + 1);
  };
  return (
    <div className='animal-show' onClick={handleClick}>
      <img className='animal' src={svgMap[type]} alt="animal" />
      <img className='heart' src={heart} alt="heart" style={{ width: 10 + 10 * click + "px" }} />
    </div>
  );
};

export default AnimalShow;
