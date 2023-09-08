import './style.scss'
import PropTypes from 'prop-types';

export function ChecklistItem(props) {
  const {textOfCheckBox} = props
  return(
    <>
      <div className="checklistItemStructure">
        <input type='checkbox' className="checklistItemStructure__checkbox" id="checklistItemStructure__checkbox" />
        <label htmlFor="checklistItemStructure__checkbox" className="checklistItemStructure__label">{textOfCheckBox}</label>
      </div>
    </>
  )
}

ChecklistItem.propTypes = {
  textOfCheckBox: PropTypes.string,
};