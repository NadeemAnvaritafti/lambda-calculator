import React from "react";
import "../../../App.css";

const SpecialButton = props => {
  console.log(props);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div className='eachButtonDiv'>
      <button className='specialButtonsIndiv btns' onClick={()=> props.changeCount(props.button)}>{props.button}</button>
      </div>
    </>
  );
};

export default SpecialButton;