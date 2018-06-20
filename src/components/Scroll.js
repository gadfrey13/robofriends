import React from 'react';

//This is are pure functions. That means they dont interact with outside world.
//Other than what is past from the parent.
//children
//props has props.children
//With props.children you can wrap components with other components.
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height: '500px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;