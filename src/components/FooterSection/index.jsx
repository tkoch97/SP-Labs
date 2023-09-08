import BlackLogo from '../../assets/black-logo.svg'
import { Ancor } from '../Ancor';
import './style.scss';

export function FooterSection() {

  return (
    <div className='container'>

      <div className='footerSection'>

        <div className='footerSection__principalContent'>

          <img className='footerSection__logo' src={BlackLogo} alt="logo SP Labs Preta" />

          <div className='footerSection__links'>

            <div className='footerSection__linksBlock'>
              <h2 className='footerSection__title'>
                SP Labs
              </h2>
              <Ancor className="ancorStructure--dark" title='Política de privacidade' href='#' />
              <Ancor />
            </div>

            <div className='footerSection__linksBlock'>
              <h2 className='footerSection__title'>
                Sem Processo
              </h2>
              <Ancor className="ancorStructure--dark" title='Site' href='https://www.semprocesso.com.br/' target='_blank' />
              <Ancor className="ancorStructure--dark" title='Produtos' href='https://www.semprocesso.com.br/#produtos' target='_blank'/>
              <Ancor className="ancorStructure--dark" title='Blog' href='https://www.semprocesso.com.br/blog' target='_blank'/>
            </div>
          </div>

        </div>

        <div className='footerSection__line' />

        <p className='footerSection__credits'>
          SP Labs 2023. Feito por Thiago Koch
        </p>

      </div>

    </div>
  )
}
