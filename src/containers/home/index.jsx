import './style.scss';
import { HeroSection } from '../../components/HeroSection';
import { CasesSection } from '../../components/CasesSection';
import { VideoSection } from '../../components/VideoSection';
import { ContactSection } from '../../components/ContactSection';
import { FooterSection } from '../../components/FooterSection';


function Home() {


  return (
    <div className='container'>
      <div className='hero'>
        <HeroSection link1='#cases' link2='#contact'/>
      </div>

      <div className='main'>

        <div className='casesBlock' id='cases'>
          <CasesSection />
        </div>

        <div className='videoBlock' id='video'>
          <VideoSection />
        </div>

        <div className='contactBlock' id='contact'>
          <ContactSection />
        </div>
      </div>

      <div className='footer'>
        <FooterSection />
      </div>
      
    </div>
  )
}

export default Home
