import './style.scss'
import React, { useState, useEffect } from 'react';
import { BsChatLeft } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { TbSend } from 'react-icons/tb';
import { PiArrowElbowRightUpBold } from 'react-icons/pi';
import { FaCompressAlt, FaExpandAlt } from 'react-icons/fa';
import chatAvatarMenu from '../../assets/chatAvatarMenu.svg';
import { Input } from '../Input';

export function ModalChat() {
  const chatPanelMainRef = React.useRef(null);
  const chatPanelRef = React.useRef(null);
  const [isOpened, setIsOpened] = useState(false);
  const [isSmall, setIsSmall] = useState(true);

  useEffect(() => {
    chatPanelRef.current = document.querySelector(".modalChatStructure__chatPanel");
    chatPanelMainRef.current = document.querySelector('.modalChatStructure__main');
  })


  const toggleChat = () => {
    setIsOpened(!isOpened);

    if(!isOpened) {
      chatPanelRef.current.classList.add('modalChatStructure__chatPanel--opened')
    } else {
      chatPanelRef.current.classList.remove('modalChatStructure__chatPanel--opened')
    }
  };

  const handleSizeMain = () => {
      setIsSmall(!isSmall);

      if(isSmall) {
        chatPanelMainRef.current.classList.add('modalChatStructure__main--expanded');
      } else {
        chatPanelMainRef.current.classList.remove('modalChatStructure__main--expanded');
      }
    }


  return(
    <>
    <div className='modalChatStructure'>

      <div className='modalChatStructure__chatPanel'>

        <div className='modalChatStructure__header'>

          <div className='modalChatStructure__menu'>

            <img className='modalChatStructure__chatAvatarMenu' src={chatAvatarMenu} 
              alt="imagem da logo do avatar. círculo cinza com um sinal de maior e um underline verdes." 
            />

            <button 
              className={`modalChatStructure__sizeButton ${isSmall ? '' : 'contract'}`} 
              onClick={() =>  handleSizeMain()}>

              <p className='modalChatStructure__sizeButton__text'>{isSmall ? 'Expandir' : 'Recolher'}</p>
              {isSmall ? <FaExpandAlt/> : <FaCompressAlt/>}
            </button>

          </div>

          <h2 className='modalChatStructure__salute'>
            🖖 Como posso ajudar?
          </h2>

        </div>

        <div className='modalChatStructure__main'>
          <p className='modalChatStructure__main__text'>
            Role para cima
          </p>

          <PiArrowElbowRightUpBold/>
          <p className='modalChatStructure__main__text'>
            para ver o histórico
          </p>
        </div>

        <div className='modalChatStructure__input'>

          <Input className='inputStructure--chat' placeholder='Digite sua dúvida'/>
          <button className='modalChatStructure__sendButton'>
            <TbSend/>
          </button>

        </div>
      </div>

      <div className='modalChatStructure__buttonSpace'>
        <div className={`modalChatStructure__buttonChat ${isOpened ? '--close' : ''}`} onClick={() => toggleChat()}>
          {isOpened ? <IoIosArrowDown /> : <BsChatLeft />}
        </div>
      </div>
    </div>
    </>
  )
}''