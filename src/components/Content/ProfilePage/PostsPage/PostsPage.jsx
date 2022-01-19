import React from 'react'
import s from './Posts.module.css'
import { useForm } from 'react-hook-form'
import PostsElements from './Post'
import useInput from '../../../../hooks/useInput'

import {Button, FormStyled, Input, SpanErrors} from '../../../../styledComponents/styledComponents'

function AddPostForm(props) {
   
     const { register, handleSubmit, formState: {errors}} = useForm()

    let userPost = useInput('')


    let submit = (data) => {
        console.log(data)
        let post = data.text
        props.addNewPostAC(post)
       
    }
    return (
        <FormStyled className={s.container_add_post} onSubmit={handleSubmit(submit)}>
            <Input   {...register('text', {required: true, maxLength: 20, minLength: 5})} {...userPost} 
             placeholder='New post...'  id='area' />
             {errors.text && errors.text.type === 'required' && <SpanErrors>Write somethink</SpanErrors>}
             {errors.text && errors.text.type === 'minLength' && <SpanErrors>Min lenght is 5</SpanErrors>}
             {errors.text && errors.text.type === 'maxLength' && <SpanErrors>Max lenght is 20</SpanErrors>}

            <Button type='submit'>Add Post</Button>
        </FormStyled >
    )
}

function PostsPage(props) {
    return (
        <div className={s.background}>
            <AddPostForm {...props} />
            
                <PostsElements {...props} />
            
        </div>
    )
}

export default PostsPage