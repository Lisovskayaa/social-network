import React from 'react'
import {  Button, ButtonMinor, FormStyled, Input, SpanErrors } from '../../../../../styledComponents/styledComponents'
import { useForm } from 'react-hook-form'
import useInput from '../../../../../hooks/useInput'


function AddDescribeForm (props)  {

    const {register, handleSubmit, formState: {errors}} = useForm()
    let commentText = useInput('')

   const addComment = (data) => {
       let comment = {id: 2, text: data.text}
       props.addDescribe(comment)
       
   }

    return(
        <>
        <FormStyled onSubmit={handleSubmit(addComment)}>
                   <Input   {...register('text', {required: true, minLength: '', maxLength:90}) } {...commentText}/>
                   <Button type='submit'>change describe</Button>
                   {errors.text && errors.text.type ===  'required' && <SpanErrors>Write somethink</SpanErrors> }
                   {errors.text && errors.text.type === 'minLength' && <SpanErrors>Min lenght is 5</SpanErrors>}
                   {errors.text && errors.text.type === 'maxLength' && <SpanErrors>Max lenght is 50</SpanErrors>} 
        </FormStyled>
     </>
    )
  
}

export default AddDescribeForm