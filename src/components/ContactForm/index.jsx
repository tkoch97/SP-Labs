import './style.scss';
import { Input } from "../Input";
import { Select } from "../Select";
import { TextArea } from "../TextArea";
import { Button } from "../Button";
import { ChecklistItem } from '../ChecklistItem';

export function ContactForm() {

  return(
    <>
      <div className="contactFormStructure">

        <div className="contactFormStructure__inputs">
          <Input placeholder='Seu nome' type='text'/>
          <Input placeholder='Seu e-mail' type='email'/>
        </div>

        <div className="contactFormStructure__select">
          <Select placeholder='Seu segmento' values={['Educação', 'Alimentação', 'Comércio']} name="segmento"/>
        </div>

        <div className="contactFormStructure__textArea">
          <TextArea placeholder='Fale um pouco sobre o seu negócio'/>
        </div>

        <div className="contactFormStructure__check">
          <ChecklistItem 
          textOfCheckBox='Declaro que conheço a Política de Privacidade e 
          autorizo a utilização das minhas informações pelo SP Labs'
          />
        </div>

        <div className="contactFormStructure__button">
          <Button title='Enviar'/>
        </div>

      </div>
    </>
  )
}