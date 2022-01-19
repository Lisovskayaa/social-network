import React, { useState } from 'react'
import './modal.css'
import deleteIcon from './ModaIcons/delete_icon.png'
import changeIcon from './ModaIcons/edit_icon.png'
import forwardIcon from './ModaIcons/forward_icon.png'
import ModalDeleteWerification from './ModalDeleteWerification'
import EditModeWerefication from './EditModeWerification'
import ForwardModeWerifications from './ForwardModeWerifications'
import { Button } from '../../styledComponents/styledComponents'


function ModalOptions(props) {

    const [deleteModule, setDeleteModule] = useState(false)
    const activateDeleteModule = () => {
        setDeleteModule(true)
    }
    const deActivateDeleteModule = () => {
        setDeleteModule(false)
    }

    const [editModule, setEditModule] = useState(false)
    const activateEditModule = () => {
        setEditModule(true)
    }
    const deActivateEditModule = () => {
        setEditModule(false)
    }

    const [forwardModule, setforwardModule] = useState(false)
    const activateFrwdMod = () => {
        setforwardModule(true)
    }
    const deActivateFrwdMod = () => {
        setforwardModule(false)
    }

    return (
        <div>
            <div className='modal'>

                <div className="modal__content">
                    <Button className="button_close_options" onClick={props.hideOptions}>close</Button>

                    {!deleteModule && <div className="options_button_wrpapper"><img src={deleteIcon} alt='image_options' />
                        <button onClick={activateDeleteModule}>  Delete post</button></div>}

                    {deleteModule && <div className="options_button_wrpapper"><img src={deleteIcon} alt='image_options' />
                        <ModalDeleteWerification  {...props} />
                        <button onClick={deActivateDeleteModule}> Delete post</button></div>}

                    {!editModule && <div className="options_button_wrpapper"><img src={changeIcon} alt='image_options' />
                        <button onClick={activateEditModule}> Change post</button></div>}
                    {editModule && <div className="options_button_wrpapper"><img src={changeIcon} alt='image_options' />
                        <EditModeWerefication   {...props} />
                        <button onClick={deActivateEditModule}> Change post</button></div>}

                    {!forwardModule && <div className="options_button_wrpapper"><img src={forwardIcon} alt='image_options' />
                        <button onClick={activateFrwdMod}>Foward post</button></div>}

                    {forwardModule && <div className="options_button_wrpapper"><img src={forwardIcon} alt='image_options' />
                        <ForwardModeWerifications {...props} />
                        <button onClick={deActivateFrwdMod}>Foward post</button></div>}
                </div>
            </div>

        </div>
    )
}


export default ModalOptions