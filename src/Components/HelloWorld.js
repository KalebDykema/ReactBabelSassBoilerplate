import React from 'react';

function HelloWorld(props){
    return(
        <h1 id="hello-world">Hello {props.name}</h1>
    );
}

export default HelloWorld;