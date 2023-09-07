import './style.scss'
import PropTypes from 'prop-types';

export function Select(props) {

  const {name, values, placeholder} = props

  return(
    <>
      <select className='selectStructure' name={name}>
        <option value="" disabled selected hidden >{placeholder}</option>
        {values.map((value, index) => (
        <option key={index} value={value}>
          {value}
        </option>
        ))}
        <option value="outro">Outro</option>
      </select>
    </>
  )
}


Select.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired
};