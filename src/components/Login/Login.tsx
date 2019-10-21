import * as React from 'react';
import GoogleLogin from 'react-google-login';
import { Container, Spinner } from 'reactstrap';
import connect, { LoginProps } from '../../containers/Login.container';
// import history from '../../history'

class Login extends React.Component<LoginProps, any> {

    login() {
        let element: HTMLElement = document.getElementsByClassName('Google_Login')[0] as HTMLElement;
        element.click();
    }

    render() {
        if (this.props.authentication.loggedIn === true) {
            window.location.href = '/'
            // history.push("/")
        }
        return (
            <React.Fragment>
                <div>
                    <section className='jumbotron text-center' >
                        <Container>
                            <h1 className="display-3">SurveyShrike</h1>
                            <hr className="my-2" />
                            <p className="lead">Create surveys for others, take surveys of others !!!</p>
                            <p>
                                <GoogleLogin
                                    className={"Google_Login"}
                                    clientId={process.env.REACT_APP_CLIENT_ID + ''}
                                    onSuccess={this.props.userActions.loginUser}
                                    onFailure={() => { }}
                                    redirectUri={'http://localhost:3000'}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </p>
                            {this.props.authentication.loggingIn && <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
                            }
                        </Container>
                    </section>
                </div>
            </React.Fragment>
        )
    }
}
export default connect(Login)
