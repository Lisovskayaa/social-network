import React from 'react'
import s from './Photos.module.css'
import { Button, ButtonMinor, FormStyled,  Wrapper } from '../../../../styledComponents/styledComponents'
import { useState } from 'react'


let AddPhotosForm = (props) => {
    return (
        <FormStyled  onSubmit={props.handleSubmit}>
            <Button>Add photo</Button>
        </FormStyled>
    )
}


export default function PhotosPage(props) {

    let photosElements = props.photos.map(p => <Photo id={p.id} title={p.title} url={p.url} />)
    return (
        <Wrapper>
            <AddPhotosForm />
               <div className={s.photos_container}>
            {photosElements}
            </div>
        </Wrapper>
    )
}


function Photo(props) {

     let [comments, setComments] = useState(false)

     const vivisbleComments = () => {
        setComments(true)
        console.log(true)
     }

     const unVisibleComments = () => {
       setComments(false)
       console.log(false)
    }


    return (
        <div className={s.photo_wrapper}>
            
               <img src={props.url} alt={'image_random'}  />
            
            {!comments &&   
             <ButtonMinor onClick={vivisbleComments}> Describe </ButtonMinor> }

             {comments && <>
              
              <div className={s.describe}>  {props.title}</div>
             <ButtonMinor onClick={unVisibleComments}> Hidden  </ButtonMinor></> }
     

            
              </div>
    )
}
