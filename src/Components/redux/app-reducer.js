import {
    api
} from "../../API/API.js"

const SET_PROFILE = "SET_PROFILE"
const SET_INITIALIZET = "SET_INITIALIZET"
const SET_DATA_USER_FORM = "SET_DATA_USER_FORM"
const ACCESS_CHECK = "ACCESS_CHECK"
const EXIT_ACCOUNT = "EXIT_ACCOUNT"
const SET_DISABLE_BUTTON_LOGIN = "SET_DISABLE_BUTTON_LOGIN"


let initialState = {
    userData: null,
    userForm: {
        email: null,
        password: null,
        rememberMe: null
    },
    initialize: true,
    accessible: false,
    disabledButtonLogin: false,
    loginErrorText: null
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            debugger;
            return {
                ...state,
                userData: {
                        ...state.userData,
                        email: action.userData.email,
                        password: action.userData.password,
                    },
                    initialize: true,
                    disabledButtonLogin: false
            };

        case SET_INITIALIZET:
            debugger;
            return {
                ...state,
                initialize: action.initialize
            };

        case SET_DATA_USER_FORM:
            debugger;
            return {
                ...state,
                userForm: {
                        email: action.email,
                        password: action.password,
                        rememberMe: action.rememberMe,
                    },
                    loginErrorText: null
            };
        case ACCESS_CHECK:
            if (state.userData.email === state.userForm.email && state.userData.password === state.userForm.password) {
                return {
                    ...state,
                    accessible: true
                }
            } else {
                return {
                    ...state,
                    loginErrorText: true
                }
            }

            case EXIT_ACCOUNT:
                return {
                    ...state,
                    accessible: false
                }

                case SET_DISABLE_BUTTON_LOGIN:
                    return {
                        ...state,
                        disabledButtonLogin: action.disabled
                    }

                    default:
                        return state;
    }
}



const setProfile = (userData) => {
    debugger;
    return {
        type: SET_PROFILE,
        userData
    }
}


export const setDataUserForm = (data) => {
    debugger;
    return {
        type: SET_DATA_USER_FORM,
        email: data.email,
        password: data.password,
        rememberMe: data.checkbox
    }
}


export const initializetSuccess = (initialize) => {
    debugger;
    return {
        type: SET_INITIALIZET,
        initialize
    }
}

const accessСheck = () => {
    return {
        type: ACCESS_CHECK,

    }

}

export const exitAccount = () => {
    return {
        type: EXIT_ACCOUNT,
    }

}

const setDisabledButtonLogin = (disabled) => {
    return {
        type: SET_DISABLE_BUTTON_LOGIN,
        disabled
    }
}

export const initializeProfile = () => {
    return async (dispatch) => {
        dispatch(setDisabledButtonLogin(true))
        const profile = await api.getProfile()
        if (profile.status === 200) {
            debugger;
            dispatch(setProfile(profile.userData))
            dispatch(accessСheck())
        }
    }
}



export default appReducer;