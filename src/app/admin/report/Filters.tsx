'use client'

import SelectComp from '@/ui/SelectComp'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import DatePicker from 'react-multi-date-picker'
import TextInputComp from '@/components/TextInputComp'

const options = [
  { name: 'همه', value: '0' },
  { name: 'تایید شده', value: '1' },
  { name: 'تایید نشده', value: '2' },
]

export default function Filters() {
  return (
    <div>
      <SelectComp options={options} />
      <div className="flex items-center space-x-2">
        <Label htmlFor="airplane-mode">تاریخ صوت</Label>
        <div dir="ltr">
          <Switch id="airplane-mode" />
        </div>
        <Label htmlFor="airplane-mode">تاریخ متن</Label>
      </div>
      <div className="flex items-center gap-4">
        <DatePicker placeholder="از تاریخ" />
        <DatePicker placeholder="تا تاریخ" />
      </div>
      <TextInputComp
        name="search"
        onChange={() => console.log()}
        value="search"
      />
    </div>
  )
}
