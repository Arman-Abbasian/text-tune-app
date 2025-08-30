'use client'
import ImageComp from '@/ui/ImageComp'
import { useState, useRef } from 'react'
import AudioPlayer from './AudioPlayer'

export default function AudioRecorder() {
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null)
  const chunksRef = useRef<BlobPart[]>([])
  const isRecording = useRef<boolean>(false)
  const blobRef = useRef<Blob | null>(null)

  // 👉 برای بک‌اند
  // const formData = new FormData();
  // formData.append("file", blob, "recording.webm");
  // await fetch("/api/upload", { method: "POST", body: formData });

  const startRecording = async () => {
    //reset
    setAudioUrl(null)
    setRecorder(null)
    chunksRef.current = []
    blobRef.current = null

    if (typeof navigator === 'undefined' || !navigator.mediaDevices) {
      alert('مرورگر شما امکان ضبط صدا را ندارد')
      return
    }
    if (navigator.permissions) {
      navigator.permissions
        .query({ name: 'microphone' as PermissionName })
        .then((result) => {
          if (result.state === 'denied') {
            alert('❌ دسترسی به میکروفن را مسدود کرده اید ')
          }
        })
    }

    try {
      isRecording.current = true
      //شلنگ آب باز شده و داره آب میاد
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      //بطری مناسب برای ذخیره آب شلنگ انتخاب و تنظیم شد
      const mediaRecorder = new MediaRecorder(stream)
      //فرمان باز شد در بطری رو می دی
      mediaRecorder.start()
      setRecorder(mediaRecorder)

      //در بطری باز شد و آب شلنگ توش ذخیره می شه
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data)
        }
      }

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' })
        blobRef.current = blob
        chunksRef.current = []
        setAudioUrl(URL.createObjectURL(blob))
      }
    } catch (error) {
      console.log(error)
    }
  }

  const stopRecording = () => {
    isRecording.current = false
    recorder?.stop()
  }

  return (
    <div className="flex flex-col items-center gap-4 ">
      {isRecording.current ? (
        <button
          onClick={stopRecording}
          className="bg-danger animate-pulse text-white w-48 h-48 p-4 rounded-full cursor-pointer shadow-2xl drop-shadow-2xl"
        >
          <ImageComp src={'/images/microphone.png'} alt="mic" />
        </button>
      ) : (
        <button
          onClick={startRecording}
          className="bg-primary-300 text-white w-48 h-48 p-4 rounded-full cursor-pointer shadow-2xl drop-shadow-2xl"
        >
          <ImageComp src={'/images/microphone.png'} alt="mic" />
        </button>
      )}

      {audioUrl && <AudioPlayer audioUrl={audioUrl}/>}
    </div>
  )
}
