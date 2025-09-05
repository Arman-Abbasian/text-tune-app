'use client'
import ImageComp from '@/ui/ImageComp'
import AudioPlayer from './AudioPlayer'
import { useAudioRecorder } from '@/hooks/useAudioRecorder'

export default function AudioRecorder() {
  const { audioUrl, isRecording, stopRecording, startRecording } =
    useAudioRecorder()

  return (
    <div className="flex flex-col items-center gap-4 ">
      {isRecording.current ? (
        <button
          onClick={stopRecording}
          className="bg-danger animate-pulse text-white w-24 h-24 p-4 rounded-full cursor-pointer shadow-2xl drop-shadow-2xl"
        >
          <ImageComp src={'/images/microphone.png'} alt="mic" />
        </button>
      ) : (
        <button
          onClick={startRecording}
          className="bg-primary-300 text-white w-24 h-24 p-4 rounded-full cursor-pointer shadow-2xl drop-shadow-2xl"
        >
          <ImageComp src={'/images/microphone.png'} alt="mic" />
        </button>
      )}
      {audioUrl && (
        <div className="flex flex-col gap-2">
          <AudioPlayer audioUrl={audioUrl} />
        </div>
      )}
    </div>
  )
}
