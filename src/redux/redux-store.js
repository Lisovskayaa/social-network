import { applyMiddleware, combineReducers, createStore } from "redux";
import { usersReducer } from "./reducers/users-reducer";
import thunkMiddleware from "redux-thunk";
import { photosReducer } from "./reducers/photos-reducer";
import { postsReducer } from "./reducers/posts-reducer";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    usersPage: usersReducer,
    postsPage: postsReducer,
    photosPage: photosReducer,
    form: formReducer

})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store;
export default store