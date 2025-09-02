'use client'
import InputTags from '@/components/InputTags'
import React, { useState } from 'react'

function AddText() {
  const [tags, setTags] = useState<string[]>([])
  return (
    <div>
      <InputTags
        placeholder="کلمه‌ای بنویسید و Enter بزنید..."
        onChange={setTags}
        maxTags={2}
        className=""
        initialTags={[]}
      />
      <textarea
        placeholder="متن خود را وارد نمایید"
        className="bg-secondary-300"
      >
        dsfd
      </textarea>
    </div>
  )
}

export default AddText
