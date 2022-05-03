import { useState } from "react"

import { feedbackTypes } from "./feedbackTypes"
import FeedbackTypeStep from "./Steps/FeedbackTypeStep"
import FeedbackContentStep from "./Steps/FeedbackContentStep"

export type FeedbackTypeProps = keyof typeof feedbackTypes

const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypeProps | null>(null)

  const handleRestartFeedback = () => {
    setFeedbackType(null)
  }

  return (
    <div
      className={`
        bg-zinc-900 p-4 relative rounded-2xl
        flex flex-col items-center shadow-lg 
        w-[calc(100vw-2rem)] md:w-auto
      `}
    >
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep
          feedbackType={feedbackType}
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por {' '}
        <a
          className="underline underline-offset-2"
          target="_blank"
          href="https://github.com/igor-cotrim"
        >
          Igor Cotrim
        </a>
      </footer>
    </div>
  )
}

export default WidgetForm