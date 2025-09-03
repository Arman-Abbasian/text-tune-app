import ButtonComp from '@/ui/ButtonComp'
import ImageComp from '@/ui/ImageComp'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { ArrowDown, Download } from 'lucide-react'
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
    <div className="bg-primary-100 rounded-lg shadow-2xl drop-shadow-2xl p-2 flex flex-col items-center gap-2 w-64">
      <DotLottieReact
        src="/json/play.json"
        loop
        autoplay
        className="w-full h-14 flex justify-center"
      />
      <div className="flex justify-between items-center w-full gap-4">
        <a href={audioUrl} download>
          <Download className="w-10 text-primary-700" />
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
      <ButtonComp
        text="تایید و ارسال"
        isFormButton
        canClick
        className="bg-secondary-700 w-full"
      />

      {/* Hidden audio element */}
      <audio ref={audioRef} src={audioUrl} />
    </div>
  )
}
