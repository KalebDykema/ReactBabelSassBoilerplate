import React from 'react';
import './Sass/app.scss';
import HelloWorld from './Components/HelloWorld';

function App(){
    return(
       <div>
           <HelloWorld name="Kaleb"/>
       </div>
    )
}

export default App;