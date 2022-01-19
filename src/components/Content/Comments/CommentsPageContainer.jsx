import React from 'react'
import { connect } from 'react-redux'
import { addNewComment, setComments } from '../../../redux/reducers/posts-reducer'
import CommentsPage from './CommentsPage'

class CommentsPageContainer extends React.Component {
    componentDidMount() {
        this.props.setComments()
    }
    render() {
        return <CommentsPage  {...this.props} />
    }
}
let mapStateToProps = (state) => {
    return {
        comments: state.postsPage.comments,
        
    }
}

export default connect(mapStateToProps, { setComments, addNewComment })(CommentsPageContainer)
