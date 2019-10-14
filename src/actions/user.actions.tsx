import { userConstants } from '../constants/UserConstants'
import { userService } from '../services/user.service'

export interface UserActionType {
    loginUser: (value: any) => any
    logoutUser: () => any
}

export const userActions = {
    loginUser,
    logoutUser
}

function loginUser(response: any) {
    return (dispatch: any) => {
        console.log(response)
        const user = response.w3.ofa
        dispatch(request(user))
        userService.login(response)
        dispatch(success(user))
    }

    function request(user: any) {
        return { type: userConstants.LOGIN_REQUEST, user }
    }

    function success(user: any) {
        return { type: userConstants.LOGIN_SUCCESS, user }
    }
}

function logoutUser() {
    return (dispatch: any) => {
        console.log('logout triggered')
    }
}