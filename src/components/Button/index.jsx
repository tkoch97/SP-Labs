import './style.scss';
import PropTypes from 'prop-types';

export function Button(props) {
  const {title, ...rest} = props;
  return(
    <>
      <button className="buttonStructure" {...rest}>
        {title}
      </button>
    </>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool
};