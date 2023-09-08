import './style.scss';
import PropTypes from 'prop-types';

export function Ancor(props) {
  const {title, href, ...rest} = props;
  return(
    <>
      <a className="ancorStructure" href={href} {...rest}>
        {title}
      </a>
    </>
  )
}

Ancor.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
};