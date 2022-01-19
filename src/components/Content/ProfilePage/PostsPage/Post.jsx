import React, { useState } from 'react'
import s from './Posts.module.css'
import img from './../../../../Images/user_image.jpeg'
import seeOptions from '../../../../Images/more_icon.png'
import ModalOptions from '../../../ModalWindows/ModalOptions'
import CommentsPageContainer from '../../Comments/CommentsPageContainer'
import '../../../../index.css'
import { ButtonMinor, Wrapper} from '../../../../styledComponents/styledComponents'

function PostsElements(props) {
  
   let postsElements = props.posts.map(p =>
      <Post updatePost={props.updatePost} deleteUserPost={props.deleteUserPost} body={p.body} key={p.id} id={p.id} />
   )
   return (
      <Wrapper>
         <div className={s.posts_flex}>
         {postsElements}
         </div>
         </Wrapper>
   )
}

function Post(props) {
   const date = new Date().toLocaleString()

   const [modalOption, setModalOptions] = useState(false)
   const activateModalOptions = () => {
      setModalOptions(true)
   }
   const deActivateModalOptions = () => {
      setModalOptions(false)
   }

   const [comments, setComments] = useState(false)
   const vivisbleComments = () => {
      setComments(true)
   }
   const hiddenComments = () => {
      setComments(false)
   }

   return (
     
      <div className={s.wrapper_post}>
        
         <div className={s.edit_area_button}>
            {!modalOption && <button onFocus={activateModalOptions}>
               <img src={seeOptions} alt={'icons'} />
            </button>}

            {modalOption && <div><ModalOptions hideOptions={deActivateModalOptions}{...props} /> <button class='button_secondary' onFocus={deActivateModalOptions}>
               <img src={seeOptions} alt={'icons'} />
            </button> </div>}
         </div>
         
         <div className={s.post_content_wrapper} >
            <img className={s.ava} src={img} alt='icon_user' />
            

            <div className={s.body}> <span >{props.body} </span>
            <div className={s.date}>{date}</div>
            
               {!comments && <div className={s.btn_flex}>
                  <ButtonMinor onClick={vivisbleComments} > Comments</ButtonMinor>  </div>}

               {comments && <div className={s.btn_flex}>
                  <CommentsPageContainer />
                    <ButtonMinor onClick={hiddenComments}> Hidden comments</ButtonMinor></div>}

            </div>
            
         </div>
         
        
      </div>
      
   )

}

export default PostsElements

