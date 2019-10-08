import React from "react";
import "../../../App.css";

const NumberButton = props => {
  return (
    <>
    <button  className='numBtnsIndiv' onClick={()=> props.changeCount(props.button)}>{props.button}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;