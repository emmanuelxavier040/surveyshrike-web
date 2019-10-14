import * as React from 'react'
import GoogleLogin from 'react-google-login';
import connect, { LoginProps } from '../../containers/Login.container'

class Login extends React.Component<LoginProps, any> {

    render() {
        if (this.props.authentication.loggedIn === true) {
            window.location.href = '/'
        }
        return (
            <React.Fragment>
                <GoogleLogin
                    clientId="561673755028-4jo9u0c2c0fmro007t01l8to4fa16lcn.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.props.userActions.loginUser}
                    onFailure={() => { }}
                    redirectUri={'http://localhost:3000'}
                    cookiePolicy={'single_host_origin'}
                />

            </React.Fragment>
        )
    }
}
export default connect(Login)
