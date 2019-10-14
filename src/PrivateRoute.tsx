import React from 'react'
import { Route } from 'react-router-dom'
import { store } from './index'

import { userService } from './services/user.service'
import { userConstants } from './constants/UserConstants'
import Home from './components/Home/Home';
import Login from './components/Login/Login';


export const PrivateRoute = (props: any) => {
    return (
        <Route
            {...props}
            render={() => {
                return (
                    <AuthComponent
                        path={props.path}
                        renderComponent={props.componentToRender}
                    />
                )
            }}
        />
    )
}


class AuthComponent extends React.Component<any, any> {

    constructor(props: any) {
        super(props)
        this.state = {
            isauthenticated: false,
            renderComponent: () => {
                return (
                    <div>

                    </div>
                )
            }
        }
    }

    componentDidMount() {
        store.dispatch({ type: userConstants.TOKEN_AUTH_REQUEST })
        const authResponse = userService.authenticateToken();
        authResponse.then(
            response => {
                store.dispatch({ type: userConstants.TOKEN_AUTH_SUCCESS })
                let render = this.props.renderComponent
                if (this.props.path === '/login') {
                    render = Home
                }
                this.setState({
                    isauthenticated: true,
                    renderComponent: render
                })
            },
            error => {
                store.dispatch({ type: userConstants.TOKEN_AUTH_FAILURE })
                this.setState({
                    isauthenticated: false,
                    renderComponent: Login
                })
            }
        )
    }

    render() {
        return (
            <this.state.renderComponent />
        )
    }
}