import { useState } from 'react'
import html2canvas from 'html2canvas'
import { Camera, Trash } from "phosphor-react"

import Loading from '../Loading'

type ScreenshotButtonProps = {
  onScreenshotTook: (screenshot: string | null) => void
  screenshot: string | null
}

const ScreenshotButton = ({ onScreenshotTook, screenshot }: ScreenshotButtonProps) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  const handleTaleScreenshot = async () => {
    try {
      setIsTakingScreenshot(true)
      const canvas = await html2canvas(document.querySelector('html')!)
      const base64image = canvas.toDataURL('image/png')

      onScreenshotTook(base64image)

    } catch (error) {
      console.error(error)
    } finally {
      setIsTakingScreenshot(false)
    }
  }

  if (screenshot) {
    return  (
      <button
        type='button'
        onClick={() => onScreenshotTook(null)}
        className={`
          flex items-end justify-end w-10 h-10 p-1 border-transparent rounded-md
          text-zinc-400 hover:text-zinc-100 transition-colors
        `}
        style={{
          backgroundImage: `url(${screenshot})`,
          
        }}
      >
        <Trash weight='fill' />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleTaleScreenshot}
      className={`
        p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors
        focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500
        focus:outline-none
      `}
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  )
}

export default ScreenshotButton