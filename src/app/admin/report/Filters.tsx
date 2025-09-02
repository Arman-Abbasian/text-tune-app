'use client'

import SelectComp from '@/ui/SelectComp'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import DatePicker from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import TextInputComp from '@/components/TextInputComp'

const options = [
  { name: 'همه', value: '0' },
  { name: 'تایید شده', value: '1' },
  { name: 'تایید نشده', value: '2' },
]

export default function Filters() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex  items-center gap-4">
        <SelectComp options={options} className="w-32" />
        <TextInputComp
          name="search"
          onChange={() => console.log()}
          value=""
          placeholder="search"
          className="flex-1"
        />
      </div>
      <div className="flex !items-center space-x-2">
        <Label htmlFor="airplane-mode" className="text-primary-300">
          تاریخ صوت
        </Label>
        <div dir="ltr">
          <Switch
            id="airplane-mode"
            className="data-[state=checked]:bg-primary-300 data-[state=unchecked]:bg-primary-300 border-0"
          />
        </div>
        <Label htmlFor="airplane-mode" className="text-primary-300">
          تاریخ متن
        </Label>
      </div>
      <div className="flex items-center gap-4">
        <DatePicker
          calendar={persian}
          locale={persian_fa}
          placeholder="از تاریخ"
          inputClass="!flex-1 w-full border border-primary-900 rounded-lg p-2 bg-primary-100"
        />
        <DatePicker
          calendar={persian}
          locale={persian_fa}
          placeholder="تا تاریخ"
          inputClass="!flex-1 w-full border border-primary-900 rounded-lg p-2 bg-primary-100"
        />
      </div>
    </div>
  )
}
