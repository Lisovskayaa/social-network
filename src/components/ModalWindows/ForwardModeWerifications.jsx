import React from 'react'
import './modal.css'
import telegram from './ModaIcons/OtherAppsIcon/telegram.png'
import viber from './ModaIcons/OtherAppsIcon/viber.png'
import instagram from './ModaIcons/OtherAppsIcon/instagram.png'
import { Button } from '../../styledComponents/styledComponents'

function ForwardModeWerifications(props) {
    const urlTelegram = 'https://telegram.org'
    const urlViber = 'https://telegram.org'
    const urlInstagram = 'https://www.instagram.com/?hl=en'

    return <div>
        <div className='modal'>
            <div className="modal__content">
                <div> <Button onClick={props.hideOptions} className='button_close_options' to='/posts'>Close</Button></div>
                <div className='other_apps_wrapper'>
                    <a href={urlTelegram}> <img src={telegram} alt={'telegram'} /></a>
                    <a href={urlViber}> <img src={viber} alt={'viber'} /></a>
                    <a href={urlInstagram}> <img src={instagram} alt={'instagram'} /></a>
                </div>
            </div>
        </div>
    </div>
}
export default ForwardModeWerifications
