import { useFormContext } from 'react-hook-form'
import Select, { SelectProps } from './Select'

const FormSelect = ({ id, errorMessage, ...rest }: SelectProps) => {
  const { register } = useFormContext()
  return (
    <Select id={id} errorMessage={errorMessage} {...rest} {...register(id)} />
  )
}

export default FormSelect
