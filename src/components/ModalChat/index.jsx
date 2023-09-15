import './style.scss'
import { TextArea} from '../TextArea';
import { TbSend } from 'react-icons/tb';
import { BsChatLeft } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import React, { useState, useEffect } from 'react';
import { PiArrowElbowRightUpBold } from 'react-icons/pi';
import { FaCompressAlt, FaExpandAlt } from 'react-icons/fa';
import chatAvatarMenu from '../../assets/chatAvatarMenu.svg';
import chatAvatarMessage from '../../assets/chatAvatarMessage.svg';
import { HandleSendMsgByChat } from '../../functions/HandleSendMsgByChat';

export function ModalChat() {
  const chatPanelMainRef = React.useRef(null);
  const chatPanelRef = React.useRef(null);
  const historicRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const mainTextRef = React.useRef(null)

  const [isOpened, setIsOpened] = useState(false);
  const [isSmall, setIsSmall] = useState(true);
  const [inputMessage, setInputMessage] = useState('');
  const [serverResponse, setServerResponse] = useState('');

  useEffect(() => {
    chatPanelRef.current = document.querySelector(".modalChatStructure__chatPanel");
    chatPanelMainRef.current = document.querySelector('.modalChatStructure__main');
    historicRef.current = document.querySelector('.modalChatStructure__historic');
    inputRef.current = document.querySelector('.textAreaStructure--chat');
    mainTextRef.current = document.querySelector('.modalChatStructure__mainText');
  }, []);

  useEffect(() => {
    if(serverResponse !== '') {
      setTimeout(() => {
        showServerMsg();
  
        if(chatPanelMainRef.current) {
          chatPanelMainRef.current.scrollTop = chatPanelMainRef.current.scrollHeight;
        }
      }, 1000)
    }
  }, [serverResponse]);


  const updateMainTextVisibility = () => {
    if(historicRef.current && historicRef.current.children.length > 0) {
      mainTextRef.current.classList.add('modalChatStructure__mainText--hidden');
    } else {
      mainTextRef.current.classList.add('modalChatStructure__mainText--hidden');
    }
  }

  const showServerMsg = () => {

    const children = Array.from(historicRef.current.children)
    const lastChild = children[children.length -1];

    if(lastChild && lastChild.classList.contains('modalChatStructure__userMsgBox')) {
      const boxMsg = document.createElement('div')
      boxMsg.className = 'modalChatStructure__serverMsgBox'
      
      const serverAvatar = document.createElement('img')
      serverAvatar.className = 'modalChatStructure__serverMsgAvatar'
      serverAvatar.src = chatAvatarMessage
      
      const serverMsg = document.createElement('p')
      serverMsg.className = 'modalChatStructure__serverMsgText'
      serverMsg.innerHTML = serverResponse
      
      boxMsg.appendChild(serverAvatar)
      boxMsg.appendChild(serverMsg)
      historicRef.current.appendChild(boxMsg);
    }
  }

  const showCurrentDateAndUserMsg = () => {

    const currentdate = new Date();
    const formattedCurrentDate = `${currentdate.getDate()}/${currentdate.getMonth() + 1}/${currentdate.getFullYear()}`;

    console.log("vizualizando a data atual => ", formattedCurrentDate)

    // Criar elemento para mostrar a data atual do envio da mensagem
    const boxCurrentDate = document.createElement('div')
    boxCurrentDate.className = 'modalChatStructure__currentDateBox'
    const currentDateText = document.createElement('p')
    currentDateText.className = 'modalChatStructure__currentDateText'
    currentDateText.innerHTML = formattedCurrentDate

    // Verificar se no histórico de mensagens existe um elemento currentDateText e 
    // se o valor dele é diferente do formattedCurrentDate.
    const historicChildren = historicRef.current.children;
    let lastDateElement = null;

    for (let i = historicChildren.length -1; i>=0; i--) {
      const child = historicChildren[i];

      console.log("Verificando conteúdo do child dentro do for =>", child)

      if(child.classList.contains('modalChatStructure__currentDateBox')){

        console.log("entrei aqui no if do for")

        lastDateElement = child;
        break;
      }
    }

    console.log("Verificando conteúdo do lastDateElement =>", lastDateElement.textContent)

    if(!lastDateElement || lastDateElement.textContent !== formattedCurrentDate) {

      console.log("Entrei no if de verificação do lastDateElement")

      boxCurrentDate.appendChild(currentDateText)
      historicRef.current.appendChild(boxCurrentDate);
    }


    const boxMsg = document.createElement('div')
    boxMsg.className = 'modalChatStructure__userMsgBox'
    const userMsg = document.createElement('p')
    userMsg.className = 'modalChatStructure__userMsgText'
    userMsg.innerHTML = inputMessage

    boxMsg.appendChild(userMsg)
    historicRef.current.appendChild(boxMsg);

    inputRef.current.value = '';
    setInputMessage(inputRef.current.value)
    updateMainTextVisibility();
  }

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

  const handleSendMsgButton = async () => {
    const response = await HandleSendMsgByChat({ inputMessage });
    showCurrentDateAndUserMsg();
    setServerResponse(response);
  }

  const handleSendMsgEnter = async (e) => {
    if (e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault();
      const response = await HandleSendMsgByChat({ inputMessage });
      showCurrentDateAndUserMsg();
      setServerResponse(response);
    }
  };

  
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

          <div className='modalChatStructure__mainText'>
            <p className='modalChatStructure__mainText__item'>
              Role para cima
            </p>
            <PiArrowElbowRightUpBold/>
            <p className='modalChatStructure__mainText__item'>
              para ver o histórico
            </p>
          </div>

          <div className='modalChatStructure__historic'>

          </div>

          
        </div>

          <div className='modalChatStructure__input'>

            <TextArea 
              className='textAreaStructure--chat' 
              placeholder='Digite sua dúvida'
              onChange={e => setInputMessage(e.target.value)}
              onKeyDown={handleSendMsgEnter}
            />
            
            <button className='modalChatStructure__sendButton' onClick={handleSendMsgButton}>
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
}