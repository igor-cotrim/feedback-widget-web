import CloseButton from "../../CloseButton"

import successImageUrl from '../../../assets/success.svg'

type FeedbackSuccessStepProps = {
  onFeedbackRestartRequested: () => void
}

const FeedbackSuccessStep = ({ onFeedbackRestartRequested }: FeedbackSuccessStepProps) => (
  <>
    <header>
      <CloseButton />
    </header>

    <div className="flex flex-col items-center py-10 w-[304px]">
      <img src={successImageUrl} alt="Icone de Sucesso" />

      <span className="mt-2 text-xl">Agradecemos o feedback!</span>

      <button
        type="button"
        onClick={onFeedbackRestartRequested}
        className={`
          px-6 py-2 mt-6 border-transparent rounded-md bg-zinc-800 text-sm leading-6
          hover:bg-zinc-700 transition-colors focus:ring-2 focus:ring-offset-2 
          focus:ring-offset-zinc-900 focus:ring-brand-500 focus:outline-none
        `}
      >
        Quero enviar outro
      </button>
    </div>
  </>
)

export default FeedbackSuccessStep