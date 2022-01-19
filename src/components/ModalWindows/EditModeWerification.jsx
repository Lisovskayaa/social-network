import React, { useState } from 'react'
import { Button } from '../../styledComponents/styledComponents'
import './modal.css'


function EditModeWerefication(props) {

  let [body, setBody] = useState(props.body)

  let postOnChange = (e) => {
    setBody(e.currentTarget.value)
  }

  let updatePost = () => {
    props.updatePost(props.id, body)
    props.hideOptions()
  }
  return (
    <div className='modal'>
      <div className='modal__content' > <textarea value={body} autoFocus={true} onChange={postOnChange} />

        <div className="buttons"> <Button onClick={updatePost} className='btn_yes' > Save</Button>
          <Button className='btn_no' onClick={props.hideOptions} > Cancel </Button></div></div>
    </div>
  )
}

export default EditModeWerefication

