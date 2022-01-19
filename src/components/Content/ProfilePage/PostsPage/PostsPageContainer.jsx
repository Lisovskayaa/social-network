import React from 'react'
import PostsPage from './PostsPage'
import { connect } from 'react-redux'
import {addNewPostAC, deleteUserPost, getPostsThunkCreator, updatePost} from '../../../../redux/reducers/posts-reducer'

class PostsPageContainer extends React.Component {
    componentDidMount() {
      this.props.getPostsThunkCreator() 
    }
    render() {
        return (
          
          <PostsPage  {...this.props}/>
        )
    }
}
let  mapStateToProps = (state) => {
     return {
         posts: state.postsPage.posts,
         newPost: state.postsPage.newPost
         
     }
}


export default connect(mapStateToProps, {getPostsThunkCreator,updatePost, addNewPostAC,  deleteUserPost
})(PostsPageContainer)


