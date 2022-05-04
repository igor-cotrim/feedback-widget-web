import { useState } from "react"

import { feedbackTypes } from "./feedbackTypes"
import FeedbackTypeStep from "./Steps/FeedbackTypeStep"
import FeedbackContentStep from "./Steps/FeedbackContentStep"
import FeedbackSuccessStep from "./Steps/FeedbackSuccessStep"

export type FeedbackTypeProps = keyof typeof feedbackTypes

const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypeProps | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  const handleRestartFeedback = () => {
    setFeedbackSent(false)
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
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
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