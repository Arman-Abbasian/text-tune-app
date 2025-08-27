'use client'
import ImageComp from '@/ui/ImageComp'
import { useState, useRef } from 'react'

export default function AudioRecorder() {
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null)
  const [isRecording, setIsRecording] = useState(false)
  const chunksRef = useRef<BlobPart[]>([])

  const startRecording = async () => {
    if (typeof navigator === 'undefined' || !navigator.mediaDevices) {
      alert('مرورگر شما امکان ضبط صدا را ندارد')
      return
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      setIsRecording(true)
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data)
        }
      }

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' })
        chunksRef.current = []
        setAudioUrl(URL.createObjectURL(blob))

        // 👉 برای بک‌اند
        // const formData = new FormData();
        // formData.append("file", blob, "recording.webm");
        // await fetch("/api/upload", { method: "POST", body: formData });
      }

      mediaRecorder.start()
      setRecorder(mediaRecorder)
    } catch (error) {
      console.log(error)
    }
  }

  const stopRecording = () => {
    setIsRecording(false)
    recorder?.stop()
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {isRecording ? (
        <button
          onClick={stopRecording}
          className="bg-danger animate-pulse text-white w-48 h-48 p-4 rounded-full"
        >
          <ImageComp src={'/images/microphone.png'} alt="mic" />
        </button>
      ) : (
        <button
          onClick={startRecording}
          className="bg-primary-300 text-white w-48 h-48 p-4 rounded-full"
        >
          <ImageComp src={'/images/microphone.png'} alt="mic" />
        </button>
      )}

      {audioUrl && <audio controls src={audioUrl} className="mt-4" />}
    </div>
  )
}
