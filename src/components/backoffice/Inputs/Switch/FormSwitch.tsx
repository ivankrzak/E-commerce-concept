import { useFormContext } from 'react-hook-form'
import { Switch, SwitchProps } from './Switch'

type FormSwitchProps = SwitchProps & {
  externalOnChange?: (isChecked: boolean) => void
}

export const FormSwitch = ({
  id,
  externalOnChange,
  ...rest
}: FormSwitchProps) => {
  const { register, watch } = useFormContext()

  const isChecked = watch(id)
  const registerProps = register(id)

  return (
    <Switch
      isChecked={isChecked}
      id={id}
      {...rest}
      {...registerProps}
      onChange={(event) => {
        externalOnChange?.(event.target.checked)
        void registerProps.onChange(event)
      }}
    />
  )
}
