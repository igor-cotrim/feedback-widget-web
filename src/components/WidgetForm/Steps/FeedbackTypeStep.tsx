import CloseButton from "../../CloseButton"
import { feedbackTypes } from "../feedbackTypes"
import { FeedbackTypeProps } from ".."

type FeedbackTypeStepProps = {
  onFeedbackTypeChanged: (type: FeedbackTypeProps) => void
}

const FeedbackTypeStep = ({ onFeedbackTypeChanged }: FeedbackTypeStepProps) => (
  <>
    <header>
      <span className="text-xl leading-6">Deixe seu feedback</span>
      <CloseButton />
    </header>
    <div className="flex w-full gap-2 py-8">
      {Object.entries(feedbackTypes).map(([key, value]) => {
        return (
          <button
            key={key}
            className={`
              flex flex-col items-center flex-1 w-24 gap-2 py-5 
              border-2 border-transparent rounded-lg 
              bg-zinc-800 hover:border-brand-500 
              focus:border-brand-500 focus:outline-none
            `}
            onClick={() => onFeedbackTypeChanged(key as FeedbackTypeProps)}
            type="button"
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        )
      })}
    </div>
  </>
)

export default FeedbackTypeStep