import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
type OptionType = {
  name: string
  value: string
}

type SelectCompPropsType = {
  options: OptionType[]
  className?: string
}

export default function SelectComp(props: SelectCompPropsType) {
  const { options, className } = props
  return (
    <Select>
      <SelectTrigger className={`bg-primary-100 py-6 ${className}`}>
        <SelectValue placeholder="همه" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option, index) => {
            return (
              <SelectItem key={index} value={option.value}>
                {option.name}
              </SelectItem>
            )
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
