import { api } from '../services/api';

export async function HandleSendMsgByChat (props) {
  const {inputMessage} = props

  try {
    const response = await api.post('/chat', {
      question: inputMessage
    });

    return response.data

  } catch (error) {
    console.log("Deu ruim", inputMessage)
  }
}