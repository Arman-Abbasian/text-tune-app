'use client'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import SelectComp from '@/ui/SelectComp'
import TextBox from '@/ui/TextBox'
import { truncateText } from '@/utils/TruncateText'
import DatePicker from 'react-multi-date-picker'

const options = [
  { name: 'همه', value: '0' },
  { name: 'تایید شده', value: '1' },
  { name: 'تایید نشده', value: '2' },
]

const text =
  'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.'

export default function Page() {
  return (
    <div>
      <div className="flex gap-2">
        <div className="flex flex-col gap-4 !px-4 h-screen bg-secondary-300 overflow-auto">
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
            return (
              <TextBox key={item} className="bg-primary-100 text-primary-900">
                {truncateText(text)}
              </TextBox>
            )
          })}
        </div>
        <div className="flex flex-col gap-4 flex-1">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
            return (
              <TextBox key={item} className="bg-primary-100 text-primary-900">
                {text}
              </TextBox>
            )
          })}
        </div>
      </div>
    </div>
  )
}
