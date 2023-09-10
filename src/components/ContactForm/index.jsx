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
  const[segment, setSegment] = useState('');
  const[description, setDescription] = useState('');

  const handleSelectChange = (e) => {
    const selectedOption = e.option.value;
    setSegment(selectedOption)
    console.log("Verificando campo segment =>", selectedOption);
  }

  return(
    <>
      <div className="contactFormStructure">

        <div className="contactFormStructure__inputs">
          <Input placeholder='Seu nome' type='text' onChange={e => setName(e.target.value)}/>
          <Input placeholder='Seu e-mail' type='email'onChange={e => setEmail(e.target.value)}/>
        </div>

        <div className="contactFormStructure__select">
          <Select placeholder='Seu segmento' values={['Educação', 'Alimentação', 'Comércio']} value={segment} name="segment" onChange={handleSelectChange}/>
        </div>

        <div className="contactFormStructure__textArea">
          <TextArea placeholder='Fale um pouco sobre o seu negócio' onChange={e => setDescription(e.target.value)}/>
        </div>

        <div className="contactFormStructure__check">
          <ChecklistItem 
          textOfCheckBox='Declaro que conheço a Política de Privacidade e 
          autorizo a utilização das minhas informações pelo SP Labs'
          />
        </div>

        <div className="contactFormStructure__button">
          <Button title='Enviar' onClick={() => HandleContactFormSubmission({name, email, segment, description})}/>
        </div>

      </div>
    </>
  )
}