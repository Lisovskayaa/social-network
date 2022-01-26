import { postsAPI } from "../../API/api"
const GET_POSTS = 'posts/GET_POSTS'
const SET_COMMENTS = 'SET_COMMENTS'
const ADD_NEW_POST = 'ADD_NEW_POST'
const REMOVE_POST = 'REMOVE_POST'
const UPDATE_POST = 'UPDATE_POST'
const ADD_COMMENT = 'ADD_COMMENT'

let initialState = {
    posts: [ {body: 'Hi', id: 1}, {body: 'Hi', id: 2} ], 
    comments: [{id:1, email: 'Me', body: 'So....'}],
    newPost: '',
    isAuth: false
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state, posts: [...action.posts]
            }
        case ADD_NEW_POST:
            return {
                ...state,

                posts: [...state.posts, { id: Date.new, body: action.newPost }]
            }
        case SET_COMMENTS:
            return {
                ...state,
                comments: [...action.comments]
            }
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, { email: 'Me', body: action.body }]
            }
        case REMOVE_POST:
            return {
                ...state,
                posts: [...state.posts.filter(post => post.id !== action.id)]
            }
        case UPDATE_POST:
            return {
                ...state,
                posts: [...state.posts.map(p => {
                    if (p.id === action.id) {
                        p.body = action.body
                    }
                    return p
                })]
            }
        default: return state

    }
}

export const setPostsAC = (posts) => ({ type: GET_POSTS, posts })
export const setCommentsAC = (comments) => ({ type: SET_COMMENTS, comments })
export const addNewPostAC = (newPost) => ({ type: ADD_NEW_POST, newPost })
export const removePostAC = (id) => ({ type: REMOVE_POST, id })
export const updatePostAC = (id, body) => ({ type: UPDATE_POST, id, body })
export const addNewCommentAC = (body) => ({ type: ADD_COMMENT, body })

export const getPostsThunkCreator = () => {
    return (dispatch) => {
        postsAPI.getPosts()
            .then(
                data => {
                    dispatch(setPostsAC(data))

                }
            )
    }
}

export const setComments = () => async (dispatch) => {
    let data = await postsAPI.getComments()
    dispatch(setCommentsAC(data))
}

export const addNewComment = (body) => async (dispatch) => {
     let data = await postsAPI.postNewComment(body)
    dispatch(addNewCommentAC(data.body))
}



export const addNewPost = (body) => {
    return (dispatch) => {
        postsAPI.postNewUserPost(body).then(
            data => {
                dispatch(addNewPostAC(data.body))

            }
        )

    }
}

export const updatePost = (id, body) => {
    return (dispatch) => {
        postsAPI.updateUserPost(id, body).then(
            data => {
                dispatch(updatePostAC(data.id, data.body))

            }
        )
    }
}


export const deleteUserPost = (id) => {
    return (dispatch) => {
        dispatch(removePostAC(id))
        postsAPI.deleteUserPost(id)
    }
}