import { connect, Dispatch } from 'react-redux'
import { IAppReducer } from '../reducers/reducers'
import { UserActionType, userActions } from '../actions/user.actions'
import { IAuthenticationState } from '../reducers/authentication.reducer';

interface ILoginStateProps {
    authentication: IAuthenticationState
}

interface ILoginDispatchProps {
    userActions: UserActionType
}

export type LoginProps = ILoginStateProps & ILoginDispatchProps

const mapStateToProps = (state: IAppReducer, props: any): ILoginStateProps => ({
    authentication: state.authentication,
    ...props
})

const mapDispatchToProps = (dispatch: Dispatch<IAppReducer>): ILoginDispatchProps => ({
    userActions: {
        loginUser: value => userActions.loginUser(value)(dispatch),
        logoutUser: () => userActions.logoutUser()(dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)