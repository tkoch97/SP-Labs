import './style.scss';
import PropTypes from 'prop-types';

export function Ancor(props) {
  const {title} = props;
  return(
    <>
      <a className="ancorStructure">
        {title}
      </a>
    </>
  )
}

Ancor.propTypes = {
  title: PropTypes.string.isRequired,
};