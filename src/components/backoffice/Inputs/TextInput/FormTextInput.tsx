import { useFormContext } from 'react-hook-form'
import TextInput, { TextInputProps } from './TextInput'

const FormTextInput = ({ id, errorMessage, ...rest }: TextInputProps) => {
  const { register } = useFormContext()

  return (
    <TextInput
      id={id}
      errorMessage={errorMessage}
      {...register(id)}
      {...rest}
    />
  )
}

export default FormTextInput
