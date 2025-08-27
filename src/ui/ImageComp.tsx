import Image from 'next/image'

type ImageCompPropsType = {
  src: string
  alt: string
  className?: string
}
export default function ImageComp(props: ImageCompPropsType) {
  const { src, alt, className } = props
  return (
    <div className={`relative aspect-square ${className}`}>
      <Image
        src={src}
        fill
        alt={alt}
        quality={80}
        className="object-cover object-center"
      />
    </div>
  )
}
