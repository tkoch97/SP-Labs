import { api } from '../services/api';

export async function HandleContactFormSubmission(props) {
const {name, email, segment, description} = props;

if(!name) {
  return alert("Por favor, insira seu nome.")
}

if(!email){
  return alert("Por favor, nos informe seu email.")
}

if(!segment){
  return alert("Por favor, nos informe com qual segmento você trabalha.")
}

if(!description){
  return alert("Por favor, nos conte um pouco sobre o seu negócio.")
}

console.log('Verificando campos => ', name, email, segment, description)

await api.post("/contact", {
  name,
  email,
  segment,
  description,
});

}