import React from 'react'
import Filters from './Filters'
import TagComp from '@/ui/TagComp'

export function TextList() {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-10">
        <p className="text-primary-300 mb-2">فیلتر</p>
        <Filters />
      </div>
      <p className="text-primary-300 mb-2">لیست</p>
      <div className="flex flex-col flex-1 gap-4 overflow-y-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
          return <TextItem key={item} />
        })}
      </div>
    </div>
  )
}

function TextItem() {
  return (
    <div className="flex flex-col gap-4 w-full bg-primary-100 text-primary-700 rounded-lg p-4">
      <p>
        متن زیر یک متن طولانی است که جهت تست این قسمت مورد استفاده قرار گرفته
        است
      </p>
      <div className="flex items-center gap-2 flex-wrap">
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return <TagComp key={item}>مراقبت</TagComp>
        })}
      </div>
    </div>
  )
}
