import { addNewCommentAC, addNewPostAC, postsReducer, removePostAC } from "../posts-reducer"


let state = {
    posts: [{ body: 'Hi', id: 1 }, { body: 'Hi', id: 2 }],
    comments: [{id:1,  body: 'So....'}],
}

it('length of posts should be incremented', () => {
    let action = addNewPostAC('Hi everyone')
    let newState = postsReducer(state, action)

    expect(newState.posts.length).toBe(3)

}
)

it('value of new post should be correct ', () => {
    let action = addNewPostAC('Hi everyone')
    let newState = postsReducer(state, action)

    expect(newState.posts[2].body).toBe('Hi everyone')
}
)


it('post should be decremented', () => {
    let action = removePostAC(3)
    let newState = postsReducer(state, action)

    expect(newState.posts.length).toBe(2)
})

it('length of comments  should be incremented', () => {
    let action = addNewCommentAC('Good job')
    let newState = postsReducer(state, action)

    expect(newState.comments.length).toBe(2)
})


it('value of new post should be correct', () => {
    let action = addNewCommentAC('Great job!')
    let newState = postsReducer(state, action)

    expect(newState.comments[1].body).toBe('Great job!')
})