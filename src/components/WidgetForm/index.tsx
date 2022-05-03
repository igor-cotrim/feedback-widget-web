import CloseButton from "../CloseButton"

const WidgetForm = () => {
  return (
    <div 
      className={`
        bg-zinc-900 p-4 relative rounded-2xl
        flex flex-col items-center shadow-lg 
        w-[calc(100vw-2rem)] md:w-auto
      `}
    >
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      <p>Hello</p>

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