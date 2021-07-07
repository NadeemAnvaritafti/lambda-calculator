import React from "react";
import "../../../App.css";

const OperatorButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div className='eachButtonDiv oButtonDiv'>
      <button className='operatorButtonsIndiv btns' onClick={()=> props.changeCount(props.button.char)}>{props.button.char}</button>
      </div>
    </>
  );
};

export default OperatorButton;