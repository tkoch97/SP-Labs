import './style.scss';
import { ModalChat } from '../../components/ModalChat';
import { HeroSection } from '../../components/HeroSection';
import { CasesSection } from '../../components/CasesSection';
import { VideoSection } from '../../components/VideoSection';
import { FooterSection } from '../../components/FooterSection';
import { ContactSection } from '../../components/ContactSection';


function Home() {


  return (
    <div className='container'>
      
      <div className='container__chat'>
        <ModalChat/>
      </div>

      <div className='container__hero'>
        <HeroSection link1='#cases' link2='#contact'/>
      </div>

      <div className='container__main'>

        <div className='container__casesBlock' id='cases'>
          <CasesSection />
        </div>

        <div className='container__videoBlock' id='video'>
          <VideoSection />
        </div>

        <div className='container__contactBlock' id='contact'>
          <ContactSection />
        </div>
      </div>

      <div className='container__footer'>
        <FooterSection />
      </div>
      
    </div>
  )
}

export default Home
