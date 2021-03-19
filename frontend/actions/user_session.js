import {signup, login, logout} from '../utils/user_session_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const CLEAR_ERRORS = "CLEAR_ERRORS" 

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const signupUser = formUser => dispatch => (
    signup(formUser).then(user => dispatch(receiveCurrentUser(user)), 
        err => (
            dispatch(receiveErrors(err.responseJSON))
        )
    )
)

export const loginUser = formUser => dispatch => (
    login(formUser).then(user => dispatch(receiveCurrentUser(user)),
        err => (
            dispatch(receiveErrors(err.responseJSON))
        )
    )
)

export const logoutUser = () => dispatch => (
    logout().then(() => dispatch(logoutCurrentUser()))
)
