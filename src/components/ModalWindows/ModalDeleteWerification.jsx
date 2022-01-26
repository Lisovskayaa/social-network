import React from 'react'
import { Button } from '../../styledComponents/styledComponents'
import './modal.css'


export default function ModalDeleteWerification(props) {
    let deletePost = () => {
        props.deleteUserPost(props.id)
    }
    return (
        <div className='modal'>
            <div className="modal__content">
                <p>Ви дійсно хочете видалити публікацію? </p>
                <div className="buttons">
                    <Button className='btn_yes' onClick={deletePost}>Yes</Button>
                    <Button className='btn_no' onClick={props.hideOptions}> No </Button>
                </div>
            </div>
        </div>
    )
}
