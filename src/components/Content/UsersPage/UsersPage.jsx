import React from 'react'
import s from './UsersPage.module.css'
import userImage from '../../../Images/user_image.jpeg'
import { NavLink } from 'react-router-dom'
import {Wrapper} from'../../../styledComponents/styledComponents'


const UsersPage = (props) => {
    return (
        <Wrapper>
              
                {props.users.map(user => <UserPage city={user.city} name={user.name} key={user.id} id={user.id} {...props} />
                )
                }
            
            </Wrapper>
        

        
    )
}
const UserPage = (props) => {
    const openPage = () => {
        props.getUserByIdTH(props.id)
    }
 

    return (
        <div>
            <div className={s.user}>
                <NavLink to={`/userProfile/${props.id}`}> <img className={s.user_photo} onClick={openPage} src={userImage} alt='dd' /></NavLink>
                   <div className={s.name}> {props.name}</div>
                      <div className={s.city}> {props.city} </div>

                
            <button className={s.btn_follow} > See more </button>
                    <NavLink to={`/userProfile/${props.id}`}>  </NavLink>
                   

                

            </div>
        </div>
    )
}

export default UsersPage