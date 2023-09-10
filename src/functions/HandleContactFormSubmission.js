import { api } from '../services/api';

export async function HandleContactFormSubmission(props) {
const {name, email, selectedSegment, description, isChecked} = props;

if(!name) {
  return alert("Por favor, insira seu nome.")
}

if(!email){
  return alert("Por favor, nos informe seu email.")
}

if(!selectedSegment){
  return alert("Por favor, nos informe com qual segmento você trabalha.")
}

if(!description){
  return alert("Por favor, nos conte um pouco sobre o seu negócio.")
}

if(isChecked == 0){
  return alert("É necessário que você marque o campo de autorização das Políticas de Privacidade")
}

try {
  const response = await api.post("/contact", {
    name,
    email,
    selectedSegment,
    description,
  });

  console.log("Respostta da requisição =>", response.data)

  return response.data

} catch (error) {
  alert("Houve algum erro inesperado, desculpe o transtorno.");
}
}