import { Button } from '../Button';
import { FiArrowRight } from 'react-icons/fi';
import './style.scss'
import PropTypes from 'prop-types';

export function SolutionSpace(props) {
  const {title, description} = props;
  return (
    <>
      <div className='solutionStructure'>

        <h1 className='solutionStructure__title'>
          {title}
        </h1>

        <p className='solutionStructure__description'>
          {description}
        </p>

        <Button className='buttonStructure--small' title='Saiba Mais' icon={FiArrowRight}/>
        
      </div>
    </>
  )
}

SolutionSpace.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.any
};