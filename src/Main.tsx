import * as React from 'react'
// import { Route } from 'react-router-dom'
import { Survey } from './containers/SurveyList.container';
import { MySurveyList } from './containers/MySurveysList.container';
import Home from './components/Home/Home';
import { PrivateRoute } from './PrivateRoute';
import NavBar from './components/Navigation/NavBar';
import Login from './components/Login/Login';

const Main: React.StatelessComponent = () => {
    document.title = 'SurveyShrike'
    return (
        <div>
            <NavBar />
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/surveys" component={Survey} />
            <Route exact path="/login" component={Login} /> */}
            <PrivateRoute exact path="/" componentToRender={Home} />
            <PrivateRoute exact path="/surveys" componentToRender={Survey} />
            <PrivateRoute exact path="/my-surveys" componentToRender={MySurveyList} />
            <PrivateRoute exact path="/login" componentToRender={Login} />
        </div>
    )
}


export default Main;