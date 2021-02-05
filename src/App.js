// import React, { Component } from 'react';
// import TodoApp from './component/TodoApp.js/TodoApp';


// export class App extends Component {
//     render(){
//         return(
//             <div><TodoApp/> </div>
//         );
//     }
// }


// export default App;
import React from 'react';
import About from './component/TodoApp.js/About/About';
import Header from './component/TodoApp.js/Header/Header';
import TodoApp from './component/TodoApp.js/TodoApp';
import { BrowserRouter as Router, Route } from "react-router-dom";


export default () => {
    return(
        
            
            
            <Router>
                <Header/>
                <Route path="/" exact component={TodoApp} />
                <Route path="/about" component={About} />
            </Router>

        
    );
};
