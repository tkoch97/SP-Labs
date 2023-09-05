import './style.scss';
import { SolutionSpace } from '../SolutionSpace';

export function CasesSection() {

  return (
    <div className='container'>
      <div className='casesSection'>

        <div className='casesSection__texts'>

          <h1 className='casesSection__title'>
            Problemas complexos.
          </h1>

          <h1  className='casesSection__title'>
            Soluções
            <span className='casesSection__title__risk'>
              complexas
            </span>

            <span className='casesSection__title__italic'>
              criativas_
            </span>
          </h1>

          <p className='casesSection__subTitle'>Confira nossos cases de sucesso que vão além do mundo juridico.</p>
        </div>

        <div className='casesSection__solutions'>
          <SolutionSpace title='Solução 1' description='Repita comigo: Não vou esquecer de prestar atenção se está tudo alinhadinho. Não vou esquecer de prestar atenção se está tudo alinhado. Não vou esquecer de prestar atenção. Não esqueça do chat, ele está pouco visível na imagem acima mas no protótipo fica melhor.'/>
        </div> 
      </div>
    </div>
  )
}
