'use client'
import InputTags from '@/components/InputTags'
import TextAreaComp from '@/components/TextAreaComp'
import ButtonComp from '@/ui/ButtonComp'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import React, { useState } from 'react'

export default function AddTextForm() {
  const [tags, setTags] = useState<string[]>([])
  const [text, setText] = useState('')
  return (
    <div className="max-w-lg mx-auto flex flex-col gap-6">
      <DotLottieReact src="/json/form.json" loop autoplay className="h-36" />
      <InputTags
        tags={tags}
        setTags={setTags}
        placeholder="عناوین اصلی را وارد نمایید..."
        maxTags={10}
        className=""
        initialTags={tags}
        name="tags"
      />
      <TextAreaComp
        value={text}
        name="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="متن خود را وارد نمایید..."
      />
      <ButtonComp
        className={`flex-1 hover:bg-primary-100 hover:text-primary-700 text-secondary-100 `}
        isFormButton={true}
        canClick={true}
        type="submit"
        disabled={false}
        loading={false}
        text="افزودن"
      />
    </div>
  )
}
