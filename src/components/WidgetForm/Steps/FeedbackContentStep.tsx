import CloseButton from "../../CloseButton"
import { feedbackTypes } from "../feedbackTypes"
import { FeedbackTypeProps } from ".."
import { ArrowLeft, Camera } from "phosphor-react"

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
      <form className="w-full my-4">
        <textarea
          className={`
            min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400
            text-zinc-100 border-zinc-600 bg-transparent rounded-md
            focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none
            resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent
            scrollbar-thin
          `}
          placeholder="Conte com detalher o que está acontecend..."
        />

        <footer className="flex gap-2 mt-2">
          <button
            type="button"
            className={`
              p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors
              focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500
              focus:outline-none
            `}
          >
            <Camera className="w-6 h-6 text-zinc-100" />
          </button>
          <button
            type="submit"
            className={`
              p-2 bg-brand-500 rounded-md border-transparent flex-1 flex
              justify-center items-center text-sm hover:bg-brand-300 focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500
              transition-colors
            `}
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  )
}

export default FeedbackContentStep