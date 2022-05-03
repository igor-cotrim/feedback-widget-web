import CloseButton from "../../CloseButton"
import { feedbackTypes } from "../feedbackTypes"
import { FeedbackTypeProps } from ".."
import { ArrowLeft } from "phosphor-react"

type FeedbackContentStepProps = {
  feedbackType: FeedbackTypeProps
  onFeedbackRestartRequested: () => void
}

const FeedbackContentStep = ({
  feedbackType,
  onFeedbackRestartRequested
}: FeedbackContentStepProps) => {
  const feedbackTypeInfo = feedbackTypes[feedbackType]

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
      <div className="flex w-full gap-2 py-8">

      </div>
    </>
  )
}

export default FeedbackContentStep