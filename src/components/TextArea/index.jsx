import './style.scss'
import PropTypes from 'prop-types';

export function TextArea(props) {

  const {placeholder, name, ...rest} = props

  return(
    <>
      <textarea 
        className='textAreaStructure' 
        name={name} 
        placeholder={placeholder}
        {...rest} 
      />
    </>
  )
}


TextArea.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
};