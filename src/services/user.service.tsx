import { apiService } from './api.service'


export const userService = {
    login,
    authenticateToken,
    logout
}


function login(response: any) {
    localStorage.setItem('google_token', response.tokenObj.id_token)
    const requestOptions = {
        methos: 'POST'
    }
    const loginResponse = apiService.apiCall('/login',requestOptions)
    .then(result => {
        if(result != null) {
            localStorage.setItem('jwt_authorization', JSON.stringify(result))
        }
    })
    .catch(rej => {})
    return loginResponse
}

function authenticateToken() {
    const requestOptions = {
        method: 'GET'
    }
    const authenticateResponse = apiService.apiCall(
        '/authenticate-token',
        requestOptions
    )
    authenticateResponse
        .then(result => { if (result !== null) console.log('Valid Token') })
        .catch(error => {
           logout()
        })
    return authenticateResponse
}


function logout() {
    localStorage.removeItem('google_toekn')
    localStorage.removeItem('user_token')

}