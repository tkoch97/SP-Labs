import './style.scss';
import { GenerateSolutionsSpace } from '../../functions/GenerateSolutionsSpace';

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
          <GenerateSolutionsSpace />
        </div>
      </div>
    </div>
  )
}
