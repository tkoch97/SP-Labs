import './style.scss';
import { Input } from "../Input";
import { Select } from "../Select";
import { TextArea } from "../TextArea";
import { Button } from "../Button";
import { ChecklistItem } from '../ChecklistItem';
import { useState } from 'react';
import { HandleContactFormSubmission } from '../../functions/HandleContactFormSubmission'

export function ContactForm() {

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[selectedSegment, setSelectedSegment] = useState('');
  const[description, setDescription] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  
  const optionsInSelectSegments = ['Educação', 'Alimentação', 'Comércio']

  return(
    <>
      <div className="contactFormStructure">

        <div className="contactFormStructure__inputs">
          <Input placeholder='Seu nome' type='text' onChange={e => setName(e.target.value)}/>
          <Input placeholder='Seu e-mail' type='email'onChange={e => setEmail(e.target.value)}/>
        </div>

        <div className="contactFormStructure__select">
          <Select placeholder='Seu segmento' values={optionsInSelectSegments} onChange={(e) => setSelectedSegment(e.target.value)}/>
        </div>

        <div className="contactFormStructure__textArea">
          <TextArea placeholder='Fale um pouco sobre o seu negócio' onChange={e => setDescription(e.target.value)}/>
        </div>

        <div className="contactFormStructure__check">
          <ChecklistItem 
          textOfCheckBox='Declaro que conheço a Política de Privacidade e 
          autorizo a utilização das minhas informações pelo SP Labs'
          onChange={() => setIsChecked(!isChecked)}
          isChecked={isChecked}
          />
        </div>

        <div className="contactFormStructure__button">
          <Button title='Enviar' onClick={() => HandleContactFormSubmission({name, email, selectedSegment, description, isChecked})}/>
        </div>

      </div>
    </>
  )
}