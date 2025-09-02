import React from 'react'

type TextInputCompPropsType = {
  value: string
  onChange: (value: string) => void
  name: string
  className?: string
  icon?: React.ReactNode
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'name'
>

function TextInputComp(props: TextInputCompPropsType) {
  const { className, value, onChange, name, icon, ...restProps } = props

  return (
    <div
      className={`flex justify-between items-center gap-2 px-2 py-1 border rounded-lg bg-primary-100 border-secondary-300 w-full ${className}`}
    >
      <input
        className="p-2 focus:outline-none hove:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        name={name}
        {...restProps}
      />
      {icon && <span className="text-primary-700 text-lg">{icon}</span>}
    </div>
  )
}

export default TextInputComp
