import './style.scss';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Ancor } from '../Ancor';
import WhiteLogo from '../../assets/white-logo.svg';
import ImgHeroBackground from '../../assets/img_hero_background.jpg';

export function HeroSection(props) {
  const {link1, link2} = props
  return (
    <div className='container'>
      <div className='heroSection'>
        <img  className='heroSection__imgBackground' src={ImgHeroBackground} alt="três meninas em uma mesa felizes usando notebooks" />

        <div className='heroSection__menu'>

          <img className='heroSection__logo' src={WhiteLogo} alt="logo SP Labs" />

          <nav className='heroSection__nav'>
              <Ancor href={link1} title="Cases" className='ancorStructure' />
              <Ancor href={link2} title="Contato" className='ancorStructure'/>
          </nav>

        </div>

        <div className='heroSection__texts'>
          <h1 className='heroSection__title'>Imagine, crie, implemente e <span>evolua</span></h1>
          <p className='heroSection__subTitle'>Porque não basta resolver apenas os conflitos do mundo do direito.</p>
        </div>

        <div className='heroSection__button'>
          <Button className='buttonStructure' title='Inicie a sua jornada' externalLink='https://www.semprocesso.com.br/'/>
        </div>

      </div>
    </div>
  )
}

HeroSection.propTypes = {
  link1: PropTypes.string,
  link2: PropTypes.string,
};
