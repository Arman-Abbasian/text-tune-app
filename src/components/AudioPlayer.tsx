import ImageComp from '@/ui/ImageComp'
import { ArrowDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

type AudioPlayerPropsType = {
  audioUrl: string
}

export default function AudioPlayer(props: AudioPlayerPropsType) {
  const { audioUrl } = props

  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audioEl = audioRef.current
    if (!audioEl) return

    const handleEnded = () => {
      setIsPlaying(false)
    }

    audioEl.addEventListener('ended', handleEnded)

    return () => {
      audioEl.removeEventListener('ended', handleEnded)
    }
  }, [])

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="max-w-xs mx-auto bg-primary-100 rounded-2xl shadow-md drop-shadow-2xl p-4 flex flex-col items-center gap-4 w-full">
      <ImageComp alt="pause" src="/images/headphone.png" className="w-20" />

      <div className="flex justify-between items-center w-full  gap-4">
        <a href={audioUrl} download>
          <ArrowDown className="w-10 text-amber-600" />
        </a>

        <button onClick={togglePlay} className="cursor-pointer block h-full">
          {isPlaying ? (
            <ImageComp
              alt="pause"
              src="/images/pause.png"
              className="w-10 h-10"
            />
          ) : (
            <ImageComp
              alt="play"
              src="/images/play.png"
              className="w-10 h-10"
            />
          )}
        </button>
      </div>

      {/* Hidden audio element */}
      <audio ref={audioRef} src={audioUrl} />
    </div>
  )
}
