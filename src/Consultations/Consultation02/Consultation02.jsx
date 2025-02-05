import { useState } from "react";

import Button from "../../components/Button/Button";

import "./styles.css";

function Counsultation_02() {
  const [ingredients, setIngredients] = useState([]);

  const onAddCheese = () => {
    setIngredients((prevValue) => {
      console.log(prevValue);
      return [...prevValue, "cheese"];
    });
  };

  const onAddMeat = () => {
    setIngredients((preValue) => {
      return [...preValue, "Meat"];
    });
  };

  const onAddSalad = () => {
    setIngredients((preValue) => {
      return [...preValue, "Salad"];
    });
  };

  return (
    <div className="consultation_02_wrapper">
      <p className="ingredients">{ingredients.toString()}</p>
      <div className="button_contatiner">
        <Button name="Add cheese" onClick={onAddCheese} />
      </div>
      <div className="button_contatiner">
        <Button name="Add meat" onClick={onAddMeat} />
      </div>
      <div className="button_contatiner">
        <Button name="Add salad" onClick={onAddSalad} />
      </div>
    </div>
  );
}

export default Counsultation_02;
