import './style.scss';
import {HeroSection} from '../../components/HeroSection';
import {CasesSection} from '../../components/CasesSection';

function Home() {

  return (
    <div className='container'>
      <div className='hero'>
        <HeroSection/>
      </div>

      <div className='main'>
        <CasesSection id='cases'/>
      </div>
    </div>
  )
}

export default Home
