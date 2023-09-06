import './style.scss';
import PropTypes from 'prop-types';

export function Ancor(props) {
  const {title, href} = props;
  return(
    <>
      <a className="ancorStructure" href={href}>
        {title}
      </a>
    </>
  )
}

Ancor.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
};