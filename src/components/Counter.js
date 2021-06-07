import React, { useState } from 'react';



function Counter(props) {

    const [state, setState]= useState(12)


    return (
        <div>
            <h1>I am Counter</h1>
            
            <h3>{state}</h3>
            <button onClick={()=>setState(state - 1)}>Increase</button>
        </div>
    );
}

export default Counter;