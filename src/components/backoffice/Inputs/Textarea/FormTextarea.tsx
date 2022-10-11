import React from 'react'
import { useFormContext } from 'react-hook-form'
import Textarea, { TextareaProps } from './Textarea'

const FormTextarea: React.VFC<TextareaProps> = ({
  id,
  errorMessage,
  ...rest
}) => {
  const { register } = useFormContext()

  return (
    <Textarea id={id} errorMessage={errorMessage} {...register(id)} {...rest} />
  )
}

export default FormTextarea
