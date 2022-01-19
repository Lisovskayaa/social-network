import React from 'react'
import { connect } from 'react-redux'
import { getPhotosThunkCreator } from '../../../../redux/reducers/photos-reducer'
import PhotosPage from './PhotosPage'

class PhotosPageContainer extends React.Component {
    componentDidMount() {
        this.props.getPhotosThunkCreator()
    }
    render() {
        return <PhotosPage {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        photos: state.photosPage.photos
    }
}

export default connect(mapStateToProps, { getPhotosThunkCreator })(PhotosPageContainer)