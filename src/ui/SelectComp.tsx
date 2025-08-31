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
}

export default function SelectComp(props: SelectCompPropsType) {
  const { options } = props
  return (
    <Select>
      <SelectTrigger className="w-fit bg-primary-300">
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
