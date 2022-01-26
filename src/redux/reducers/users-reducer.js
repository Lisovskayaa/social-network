import { userAPI } from "../../API/api";

const SET_USERS = 'SET_USERS'
const OPEN_PAGE = 'OPEN_PAGE'

let initialState = {
    users: [],
    user: {}

}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state, users: [...action.users]
            }
        case OPEN_PAGE:
            return {
                ...state, user: [action.user]
            }

        default: return state
    }
}


export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const openPageAC = (user) => ({ type: OPEN_PAGE, user })

export const getUsersThunkCreator = () => {
    return (dispatch) => {
        userAPI.getUsers()
            .then(data => {
                dispatch(setUsersAC(data))
            }
            )
    }
}

export const getUserByIdTH = (id) => {
    return (dispatch) => {
        userAPI.getUserPage(id)
            .then(data => {
                dispatch(openPageAC(data))

            })

    }

}

