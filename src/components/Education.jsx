import '../styles/field.css';

function Education() {
  return (
    <div className='field'>
      <h2>Education</h2>
      <div className="field-row">
        <h3>School</h3>
        <input type="text" />
      </div>
      <div className="field-row">
        <h3>Degree</h3>
        <input type="text" />
      </div>
      <div className="field-row">
        <h3>Start Date</h3>
        <input type="text" />
      </div>
      <div className="field-row">
        <h3>End Date</h3>
        <input type="text" />
      </div>
      <div className="field-row">
        <h3>Location</h3>
        <input type="text" />
      </div>
    </div>

  );
}

export default Education;