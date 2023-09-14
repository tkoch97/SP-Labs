import './style.scss';
import PropTypes from 'prop-types';

export function Ancor(props) {
  const {title, href, ...rest} = props;
  const isInternalID = href && href.startsWith('#');

  const handleClick = (e) => {
    if(isInternalID) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        transition: '3s ease-in'
      });
    }
  };

  return(
    <>
      <a className="ancorStructure" href={href} {...rest} onClick={handleClick}>
        {title}
      </a>
    </>
  )
}

Ancor.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
};