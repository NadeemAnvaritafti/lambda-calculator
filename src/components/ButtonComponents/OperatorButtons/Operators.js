import React, {useState} from "react";
import OperatorButton from './OperatorButton';
import {operators} from '../../../data';
import { tsPropertySignature } from "@babel/types";

//import any components needed

//Import your array data from the provided data file

const Operators = props => {
  // STEP 2 - add the imported data to state
  const [operatorButtons, setOperatorButtons] = useState(operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operatorButtons.map((button) => (
         <OperatorButton button={button} changeCount={props.changeCount}/>
       ))}
    </div>
  );
};

export default Operators;