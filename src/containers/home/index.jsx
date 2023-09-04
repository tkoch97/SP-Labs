import './style.scss';
import {Button} from '../../components/Button';
import {Ancor} from '../../components/Ancor';
import WhiteLogo from '../../assets/white-logo.svg';
import ImgHeroBackground from '../../assets/img_hero_background.jpg';

function HeroSection() {

  return (
    <>
      <div className='heroSection'>
        <img  className='heroSection__imgBackground' src={ImgHeroBackground} alt="três meninas em uma mesa felizes usando notebooks" />

        <div className='heroSection__menu'>

          <img className='heroSection__logo' src={WhiteLogo} alt="logo SP Labs" />

          <nav className='heroSection__nav'>
              <Ancor href='#cases' title="Cases" className='heroSection__item' />
              <Ancor href='#contact' title="Contato" className='heroSection__item'/>
          </nav>

        </div>

        <div className='heroSection__texts'>
          <h1 className='heroSection__title'>Imagine, crie, implemente e <span>evolua</span></h1>
          <p className='heroSection__subTitle'>Porque não basta resolver apenas os conflitos do mundo do direito.</p>
        </div>

        <div className='heroSection__button'>
          <Button title='Inicie a sua jornada'/>
        </div>

      </div>
    </>
  )
}

export default HeroSection
