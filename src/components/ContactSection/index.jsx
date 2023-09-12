// import { ContactForm } from '../ContactForm';
import { Input } from "../Input";
import { Select } from "../Select";
import { TextArea } from "../TextArea";
import { Button } from "../Button";
import { ChecklistItem } from '../ChecklistItem';
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react';
import { HandleContactFormSubmission } from '../../functions/HandleContactFormSubmission'
import './style.scss';

export function ContactSection() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedSegment, setSelectedSegment] = useState('');
  const [description, setDescription] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [responseForm, setResponseForm] = useState('');

  const optionsInSelectSegments = ['Educação', 'Alimentação', 'Comércio']

  const handleModal = {
    responseModal: document.querySelector('.contactSection__responseModal'),

    open: function() {
      handleModal.responseModal.classList.add('contactSection__responseModal--open')
    },

    close: function() {
      handleModal.responseModal.classList.remove('contactSection__responseModal--open')
    },
  }

  return (
    <div className='container'>

      <div className='contactSection'>

        <h1 className='contactSection__title'>
          Não fique parado, fale conosco
        </h1>

        <div className='contactSection__responseModal'>

          <div className='contactSection__modalCard'>
            <button className="contactSection__modalCardClose" onClick={() => handleModal.close()}>
              <IoMdClose/>
            </button>
            <h3 className='contactSection__textResponse'>{responseForm}</h3>
          </div>

        </div>

        <div className='contactSection__formSpace'>

          <div className="contactSection__formStructure">

            <div className="contactSection__inputs">
              <Input placeholder='Seu nome' type='text' onChange={e => setName(e.target.value)}/>
              <Input placeholder='Seu e-mail' type='email'onChange={e => setEmail(e.target.value)}/>
            </div>

            <div className="contactSection__select">
              <Select placeholder='Seu segmento' values={optionsInSelectSegments} onChange={(e) => setSelectedSegment(e.target.value)}/>
            </div>

            <div className="contactSection__textArea">
              <TextArea placeholder='Fale um pouco sobre o seu negócio' onChange={e => setDescription(e.target.value)}/>
            </div>

            <div className="contactSection__check">
              <ChecklistItem 
              textOfCheckBox='Declaro que conheço a Política de Privacidade e 
              autorizo a utilização das minhas informações pelo SP Labs'
              onChange={() => setIsChecked(!isChecked)}
              isChecked={isChecked}
              />
            </div>

            <div className="contactSection__button">
              <Button 
                title='Enviar'
                onClick= { async () => {
                  const response = await HandleContactFormSubmission({name, email, selectedSegment, description, isChecked});
                  setResponseForm(response);
                  if(response) {
                    handleModal.open();
                  }
                }}/>
            </div>

          </div>
          
        <div className='circle'/>
        </div>


      </div>

    </div>
  )
}