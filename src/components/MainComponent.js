import React from 'react';
import Counter from './Counter'
import Users from './Users'

function MainComponent(props) {
    return (
        <div>
           <Counter />
           <Users />
        </div>
    );
}

export default MainComponent;