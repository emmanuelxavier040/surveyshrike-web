import * as React from 'react'
import { Route } from 'react-router-dom'
import { Survey } from './containers/SurveyList.container';
import Home from './components/Home/Home';
// import { PrivateRoute } from './PrivateRoute';
import NavBar from './components/Navigation/NavBar';
import Login from './components/Login/Login';

const Main: React.StatelessComponent = () => {
    return (
        <div>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/surveys" component={Survey} />
            <Route exact path="/login" component={Login} />
        </div>
    )
}


export default Main;