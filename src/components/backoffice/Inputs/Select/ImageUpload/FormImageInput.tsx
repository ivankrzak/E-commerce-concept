import { useFormContext } from 'react-hook-form'
import ImageUpload, { ImageUploadProps } from './ImageUpload'

const FormImageInput = ({ id, errorMessage, ...rest }: ImageUploadProps) => {
  const { register } = useFormContext()

  return (
    <ImageUpload
      id={id}
      errorMessage={errorMessage}
      {...register(id)}
      {...rest}
    />
  )
}

export default FormImageInput
