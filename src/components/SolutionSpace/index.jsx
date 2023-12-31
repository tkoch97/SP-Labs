import { Button } from '../Button';
import { FiArrowRight } from 'react-icons/fi';
import './style.scss'
import PropTypes from 'prop-types';

export function SolutionSpace(props) {
  const {data} = props;
  return (
    <>
      <div className='solutionStructure'>

        <h1 className='solutionStructure__title'>
          {data.title}
        </h1>

        <p className='solutionStructure__description'>
          {data.description}
        </p>

        <Button className='buttonStructure--small' title='Saiba Mais' icon={FiArrowRight}/>

      </div>
    </>
  )
}

SolutionSpace.propTypes = {
  data: PropTypes.any,
};