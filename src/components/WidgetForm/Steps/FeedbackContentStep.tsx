import React, { useState } from "react"
import { ArrowLeft } from "phosphor-react"

import CloseButton from "../../CloseButton"
import Loading from "../../Loading"
import ScreenshotButton from "../../ScreenshotButton"
import { feedbackTypes } from "../feedbackTypes"
import { FeedbackTypeProps } from ".."
import { api } from "../../../lib/api"

type FeedbackContentStepProps = {
  feedbackType: FeedbackTypeProps
  onFeedbackRestartRequested: () => void
  onFeedbackSent: () => void
}

const FeedbackContentStep = ({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent
}: FeedbackContentStepProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)

  const feedbackTypeInfo = feedbackTypes[feedbackType]

  const handleSubmitFeedback = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      setIsSendingFeedback(true)
      await api.post('feedbacks', {
        type: feedbackType,
        comment,
        screenshot
      })

      onFeedbackSent()
    } catch (error) {
      console.error(error);
    } finally {
      setIsSendingFeedback(false)
    }
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="flex items-center gap-2 text-xl leading-6">
          <img
            className="w-6 h-6"
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form className="w-full my-4" onSubmit={handleSubmitFeedback}>
        <textarea
          className={`
            min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400
            text-zinc-100 border-zinc-600 bg-transparent rounded-md
            focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none
            resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent
            scrollbar-thin
          `}
          placeholder="Conte com detalher o que está acontecend..."
          onChange={(event) => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            onScreenshotTook={setScreenshot}
            screenshot={screenshot}
          />
          <button
            type="submit"
            disabled={comment.length === 0 || isSendingFeedback}
            className={`
              p-2 bg-brand-500 rounded-md border-transparent flex-1 flex
              justify-center items-center text-sm hover:bg-brand-300 focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500
              transition-colors disabled:opacity-50 disabled:hover:bg-brand-500 disabled:cursor-not-allowed
            `}
          >
            {isSendingFeedback ? (<Loading />) : ('Enviar feedback')}
          </button>
        </footer>
      </form>
    </>
  )
}

export default FeedbackContentStep