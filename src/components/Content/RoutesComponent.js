import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CommentsPageContainer from './Comments/CommentsPageContainer'

import MyProfileContainer from './ProfilePage/MyProfileContainer'

import PhotosPageContainer from './ProfilePage/PhotosPage/PhotosPageContainer'
import SettingPage from './SettingPage/SettingPage'

import UsersPageContainer from './UsersPage/UsersPageContainer'


const RoutersComponent = () => {
    return(
    <Routes>
        <Route path='/myprofile' element={<MyProfileContainer />} />
        <Route path='/users' element={<UsersPageContainer />}/>
        <Route path='/comments' element={<CommentsPageContainer />} />
        <Route path='/photos' element={<PhotosPageContainer />} />
       
    
        <Route path={'/setting'} element={ <SettingPage/>} />
    </Routes>
    )
}


export default RoutersComponent