import './style.scss';
import PropTypes from 'prop-types';

export function Button(props) {
  const {title, icon: Icon, ...rest} = props;
  return(
    <>
      <button className="buttonStructure" {...rest}>
        {title}
        {Icon && <Icon />}
      </button>
    </>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any,
};