import React from 'react'
import { useForm } from 'react-hook-form'
import useInput from '../../../hooks/useInput'

import { Button, FormStyled, Input, SpanErrors } from '../../../styledComponents/styledComponents'


function AddCommentForm(props) {
    const {register, handleSubmit, formState: {errors}} = useForm()

    let comment = useInput('')

    let onSubmit = (data) => {
        console.log(data)
            props.addNewComment(data.text)
        
    }
    return (
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <Input   {...register( 'text', {required: true,  minLength: 6, maxLength: 20})} 
            {...comment}   placeholder='comment...'  id='area' />
              <Button class='button' type='submit'>Add comment</Button>
              {errors.text && errors.text.type === 'required' && <SpanErrors>Ohh no, write somethink</SpanErrors>}
            {errors.text && errors.text.type === 'minLength' && <SpanErrors> Min length is 6 </SpanErrors>}
            {errors.text && errors.text.type === 'maxLength' && <SpanErrors> Max length is 20 </SpanErrors>}  </FormStyled>
    )
}

export default AddCommentForm