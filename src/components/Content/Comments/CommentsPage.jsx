import React from 'react'
import s from './Comments.module.css'
import icon from '../../../Images/user_image.jpeg'
import  AddCommentForm from './AddCommentForm'

function CommentsPage(props) {
    return (
        <div className={s.comments_wrapper}>
            {props.comments.map(comment => <div className={s.comment_body}>
                <div className={s.comment}  >
                    <img className={s.image_comment} alt={'img_comment'} src={icon} />
                    <div className={s.name}>{comment.email} </div>
                </div>
                <div className={s.body}> {comment.body}</div>
            </div>
            )
         }
            <AddCommentForm {...props} />
        </div>
    )}

export default CommentsPage
