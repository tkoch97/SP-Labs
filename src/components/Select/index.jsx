import './style.scss'
import PropTypes from 'prop-types';

export function Select(props) {

  const {values, placeholder, ...rest} = props

  return(
    <>
      <select className='selectStructure' defaultValue={placeholder} {...rest}>
        <option value={placeholder} className='selectStructure__placeholder' disabled hidden >{placeholder}</option>
        {values.map((value, index) => (
        <option key={index} value={value}>
          {value}
        </option>
        ))}
        <option value="outro" className='selectStructure__otherOption'>Outro</option>
      </select>
    </>
  )
}


Select.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string)
};