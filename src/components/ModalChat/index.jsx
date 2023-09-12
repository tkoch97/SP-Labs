import './style.scss'
import { useState } from 'react';
import { BsChatLeft } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

export function ModalChat() {

  const [isClosed, setIsClosed] = useState(false);

  const toggleChat = () => {
    setIsClosed(!isClosed);
  };

  return(
    <>
    <div className='modalChatStructure'>

      <div className='modalChatStructure__chatPanel'>

        <div className='modalChatStructure__header'>
          <div className='modalChatStructure__menu'>

          </div>
          <h2 className='modalChatStructure__salute'>
            🖖 Como posso ajudar?
          </h2>
        </div>

        <div className='modalChatStructure__main'>

        </div>

        <div className='modalChatStructure__input'>

        </div>
        
      </div>

      <div className='modalChatStructure__buttonSpace'>
        <div className={`modalChatStructure__buttonChat ${isClosed ? '--close' : ''}`} onClick={toggleChat}>
          {isClosed ? <IoIosArrowDown /> : <BsChatLeft />}
        </div>
      </div>
    </div>
    </>
  )
}''