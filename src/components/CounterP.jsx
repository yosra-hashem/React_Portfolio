import {useState} from "react";
import Counter from './Counter';

function CounterP() {
  const[count,setCount]=useState(0);
  return (
    <div className="container" my-5> 
        <Counter count={count} setCount={setCount}/>
    </div>
  );
}

export default CounterP;