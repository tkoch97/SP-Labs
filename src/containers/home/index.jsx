import './style.scss';
import {HeroSection} from '../../components/HeroSection';
import {Cases} from '../../components/Cases';

function Home() {

  return (
    <>
    <div className='hero'>
      <HeroSection/>
    </div>

    <div className='main'>
      <Cases id='cases'/>
    </div>
    </>
  )
}

export default Home
