import React from 'react'
import Toggle from '../Togler'
import { NavLink } from 'react-router-dom'
import setting_icon from './../../Images/setting_icon.png'
import { HeaderStyled } from '../../styledComponents/styledComponents'

export default function Header(props) {
    return (
        <HeaderStyled>
            <div><NavLink to='/myprofile'>Me</NavLink></div>
            <div><NavLink to='/photos'>Photos</NavLink></div>
            <div> <NavLink to='/users'>Friends</NavLink></div>
            <div><NavLink to='/setting'> <img src={setting_icon}  alt='setting_icon'/></NavLink></div>
            <div> <Toggle theme={props.theme} toggleTheme={props.themeToggler} /></div>

            </HeaderStyled>
    )
}
