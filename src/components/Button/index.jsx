import './style.scss';
import PropTypes from 'prop-types';

export function Button(props) {
  const {title, icon: Icon, Link, ...rest} = props;

  const handleClick = () => {
    if (Link) {
      window.location.href = Link;
    }
  };

  return(
    <>
      <button 
        className="buttonStructure" 
        onClick={handleClick}
        {...rest}
      >

        {title}
        {Icon && <Icon />}

      </button>
    </>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  Link: PropTypes.string,
  icon: PropTypes.any,
};