import './style.scss';
import PropTypes from 'prop-types';

export function Button(props) {
  const {title, icon: Icon, externalLink, ...rest} = props;

  const handleClick = () => {
    if (externalLink) {
      window.location.href = externalLink;
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
  externalLink: PropTypes.string,
  icon: PropTypes.any,
};