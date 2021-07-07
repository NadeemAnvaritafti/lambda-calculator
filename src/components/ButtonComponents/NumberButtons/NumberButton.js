import React from "react";
import "../../../App.css";

const NumberButton = props => {
  return (
    <>
    <div className='eachButtonDiv'>
    <button  className='numBtnsIndiv btns' onClick={()=> props.changeCount(props.button)}>{props.button}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
    </>
  );
};

export default NumberButton;