import './style.scss'
import PropTypes from 'prop-types';

export function Input(props) {

  const {placeholder, name, type, ...rest} = props

  return(
    <>
      <input type={type} placeholder={placeholder} name={name} className="inputStructure" {...rest}/>
    </>
  )
}


Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};