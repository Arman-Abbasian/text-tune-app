import React, { useState, useRef, KeyboardEvent } from 'react'
import { X } from 'lucide-react'

type InputTagsPropsType = {
  placeholder: string
  initialTags: string[]
  maxTags: number
  className: string
  onChange: React.Dispatch<React.SetStateAction<string[]>>
}

export default function InputTags(props: InputTagsPropsType) {
  const {
    placeholder = 'تگ جدید اضافه کنید...',
    initialTags = [],
    maxTags,
    className = '',
    onChange,
  } = props
  const [tags, setTags] = useState(initialTags)
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const addTag = (tagText: string) => {
    const trimmedTag = tagText.trim()

    // چک کردن اینکه تگ خالی نباشه
    if (!trimmedTag) return

    // چک کردن تکراری نبودن
    if (tags.includes(trimmedTag)) return

    // چک کردن حد مجاز
    if (maxTags && tags.length >= maxTags) return

    const newTags = [...tags, trimmedTag]
    setTags(newTags)
    setInputValue('')
    onChange?.(newTags)
  }

  const removeTag = (indexToRemove: number) => {
    const newTags = tags.filter((_, index) => index !== indexToRemove)
    setTags(newTags)
    onChange?.(newTags)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addTag(inputValue)
    } else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
      removeTag(tags.length - 1)
    }
  }

  const handleInputBlur = () => {
    if (inputValue.trim()) {
      addTag(inputValue)
    }
  }

  const isMaxReached = maxTags && tags.length >= maxTags

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`
          flex min-h-[2.5rem] w-full flex-wrap gap-2 rounded-md border border-input 
          bg-background px-3 py-2 text-sm ring-offset-background 
          placeholder:text-muted-foreground focus-within:ring-2 focus-within:ring-ring 
          focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
          ${isMaxReached ? 'border-destructive' : ''}
        `}
        onClick={() => inputRef.current?.focus()}
      >
        {tags.map((tag, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-1 rounded-md bg-primary px-2 py-1 text-xs font-medium text-primary-foreground"
          >
            <span>{tag}</span>
            <button
              type="button"
              className="ml-1 rounded-sm hover:bg-primary/80 focus:outline-none focus:ring-1 focus:ring-ring"
              onClick={(e) => {
                e.stopPropagation()
                removeTag(index)
              }}
            >
              <X className="h-3 w-3" />
              <span className="sr-only">حذف تگ</span>
            </button>
          </div>
        ))}

        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleInputBlur}
          placeholder={isMaxReached ? 'حد مجاز رسیده' : placeholder}
          disabled={!!isMaxReached}
          className="flex-1 border-0 bg-transparent p-0 placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          style={{ minWidth: '120px' }}
        />
      </div>

      {maxTags && (
        <div className="mt-1 text-xs text-muted-foreground">
          {tags.length} از {maxTags} تگ
        </div>
      )}
    </div>
  )
}
