import './style.scss';

export function VideoSection() {

  return (
    <div className='container'>
      <div className='videoSection'>

        <div className='videoSection__texts'>

          <h1 className='videoSection__title'>
            Quem são, o que fazem, onde vivem?
          </h1>

          <p className='videoSection__subTitle'>
            Somos um hub de soluções jurídicas que ajuda advogados e 
            departamentos jurídicos a gerirem o contencioso de forma 
            mais inteligente.
          </p>

        </div>
        
        <dir className='videoSection__video'>
          <iframe
            src="https://www.youtube.com/embed/o2S4jtrhiq8" 
            title="Vídeo"
            allowfullscreen
          />
        </dir>
      </div>
    </div>
  )
}
