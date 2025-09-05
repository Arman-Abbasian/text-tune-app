'use client'
import AudioRecorder from '@/components/AudioRecorder'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function Page() {
  return (
    <div className="text-primary-500 flex flex-col gap-4 items-center justify-center">
      <DotLottieReact src="/json/speak.json" loop autoplay className="h-52" />
      <div className="flex flex-col gap-4 !bg-primary-100 rounded-2xl !p-2">
        <h5>پس از کلیک بر روی دکمه ضبط, متن زیر را بخوانید</h5>
        <p className="!bg-primary-700 rounded-2xl !p-4 !w-fit text-center text-primary-100 mb-10">
          متن ساختگی است و جهت تست خوانده شود
        </p>
      </div>
      <AudioRecorder />
    </div>
  )
}
