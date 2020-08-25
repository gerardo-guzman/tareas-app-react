import React from 'react';
import './counter.css';

import { useCounter } from '../../hooks/useCounter';
 
 export const CounterHook = () => {


    const {state:counter, increment, decrement} = useCounter();
     return (
         <>
             <h1>Counter con Hook: {counter} </h1>
             <hr />

             <button className="btn" onClick={increment}> + 1</button>
             <button className="btn" onClick={decrement}> - 1 </button>
         </>
     )
 }
 