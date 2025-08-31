'use client'
import TextInputComp from '@/components/TextInputComp'
import SelectComp from '@/ui/SelectComp'
import { SearchIcon } from 'lucide-react'
import React, { useState } from 'react'

const options = [
  { name: 'همه', value: '0' },
  { name: 'خوانده نشده', value: '1' },
  { name: 'رد شده', value: '2' },
]
export default function Filters() {
  const [filters, setFilters] = useState({ type: 'all', search: '' })
  const changeHandler = (val: string) => {
    setFilters({ ...filters, search: val })
  }
  return (
    <div>
      <SelectComp options={options} />
      <TextInputComp
        placeholder="جستجوی متن"
        name="search"
        onChange={changeHandler}
        value={filters.search}
        icon={<SearchIcon />}
      />
    </div>
  )
}
