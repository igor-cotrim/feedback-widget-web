import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'

const Widget = () => {
  return (
    <Popover className='absolute bottom-4 right-4'>
      <Popover.Panel>Hello world</Popover.Panel>

      <Popover.Button
        className={`
        bg-brand-500 rounded-full group
          px-3 h-12 text-white 
          flex items-center
        `}
      >
        <ChatTeardropDots className='w-6 h-6' />

        <span 
          className={`
            max-w-0 overflow-hidden 
            group-hover:max-w-xs transition-all duration-500 ease-linear
          `}
        >
          <span className='pl-2'></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}

export default Widget