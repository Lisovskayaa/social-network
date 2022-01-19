import React from 'react';
import UsersPage from './UsersPage';
import { connect } from 'react-redux';
import { getUserByIdTH, getUsersThunkCreator } from '../../../redux/reducers/users-reducer';

class UsersPageContainer extends React.Component {

  componentDidMount(){
   this.props.getUsersThunkCreator()
}
    render(){
        return <UsersPage {...this.props}/>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }

}

export default connect(mapStateToProps, {getUsersThunkCreator,getUserByIdTH})(UsersPageContainer)