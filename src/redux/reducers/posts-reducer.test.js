import { addNewPostAC, postsReducer } from "./posts-reducer"



it('length of posts should be incremented', () => {
    let action = addNewPostAC('Hi everyone')
    let state = {
        posts: [], 
    }
    
    let newState = postsReducer(state, action)
    expect(newState.posts.length).toBe(1)
}


)