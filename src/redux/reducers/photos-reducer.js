import { photosAPI } from "../../API/api";
const GET_PHOTOS = 'GET_PHOTOS'
const GET_COMMENTS = 'GET_COMMENTS'

let initialState = {
    photos: [], 
    comments: [{id:1, name: 'Anna', text: 'My favoruite color!'}]
}

export const photosReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PHOTOS: 
            return {
                ...state, photos: [...action.photos]
            
        }
        
        default: return state
    }
}

export const getPhotosAC = (photos) => ({type: GET_PHOTOS, photos})


export const getPhotosThunkCreator = () => {
    return (dispatch) => {
       photosAPI.getPhotos()
       .then( data => {
           dispatch(getPhotosAC(data))
       })
    }
}