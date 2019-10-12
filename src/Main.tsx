import * as React from 'react'
import Survey from './components/Survey/Survey';
import Home from './components/Home/Home';
import { Route } from "react-router-dom";
import NavBar from './components/Navigation/NavBar';


const Main: React.StatelessComponent = () => {
    return (
        <div>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/surveys" component={Survey} />
        </div>
    )
}


export default Main;