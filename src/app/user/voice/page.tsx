import AudioRecorder from '@/components/AudioRecorder'

export default function Page() {
  return (
    <div className="text-primary-500 flex flex-col items-center justify-center">
      <div className="flex justify-center">
        <p className="!bg-secondary-300 !w-fit !p-4 rounded-2xl text-center text-secondary-900 mb-10">
          متن ساختگی است و جهت تست خوانده شود
        </p>
      </div>
      <AudioRecorder />
    </div>
  )
}
