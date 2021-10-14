import {
    api, ProfileType
} from "../../API/API.js"

const SET_PROFILE = "SET_PROFILE"
const SET_INITIALIZET = "SET_INITIALIZET"
const SET_DATA_USER_FORM = "SET_DATA_USER_FORM"
const ACCESS_CHECK = "ACCESS_CHECK"
const EXIT_ACCOUNT = "EXIT_ACCOUNT"
const SET_DISABLE_BUTTON_LOGIN = "SET_DISABLE_BUTTON_LOGIN"


export type UserDataType = {
    email: string,
    password: string
}

type userFormType ={
    email: string | null,
    password: string | null,
    rememberMe: boolean | null
}

export type InitialStateType = {
    userData: UserDataType | any,
    userForm: userFormType,
    initialize: boolean,
    accessible: boolean,
    disabledButtonLogin: boolean,
    loginErrorText?: boolean | null,
}

let initialState: InitialStateType = {
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

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_PROFILE:
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
            return {
                ...state,
                initialize: action.initialize
            };

        case SET_DATA_USER_FORM:
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

type SetProfileActionType = {
    type: typeof SET_PROFILE,
    userData: UserDataType
}

const setProfile = (userData: any): SetProfileActionType => {
    return {
        type: SET_PROFILE,
        userData
    }
}

type SetDataUserFormType = {
    type: typeof SET_DATA_USER_FORM,
    email: string
    password: string
    rememberMe: boolean
}

export const setDataUserForm = (data: any): SetDataUserFormType => {
    return {
        type: SET_DATA_USER_FORM,
        email: data.email,
        password: data.password,
        rememberMe: data.checkbox,
    }
}


type InitializedSuccessType = {
    type: typeof SET_INITIALIZET,
    initialize: boolean
}

export const initializedSuccess = (initialize: boolean): InitializedSuccessType => {
    return {
        type: SET_INITIALIZET,
        initialize
    }
}


type AccessCheckType = {
    type: typeof ACCESS_CHECK,
}

const accessCheck = (): AccessCheckType => {
    return {
        type: ACCESS_CHECK
    }

}

type ExitAccount ={
    type : typeof EXIT_ACCOUNT
}

export const exitAccount = ():ExitAccount => {
    return {
        type: EXIT_ACCOUNT,
    }

}


type SetDisabledButtonLogin ={
    type: typeof SET_DISABLE_BUTTON_LOGIN,
    disabled: boolean
}
const setDisabledButtonLogin = (disabled:boolean):SetDisabledButtonLogin => {
    return {
        type: SET_DISABLE_BUTTON_LOGIN,
        disabled
    }
}



export const initializeProfile = () => {
    return async (dispatch:any) => {
        dispatch(setDisabledButtonLogin(true))
        const profile:any = await api.getProfile()
        if (profile.status === 200) {
            dispatch(setProfile(profile.userData))
            dispatch(accessCheck())
        }
    }
}


export default appReducer;