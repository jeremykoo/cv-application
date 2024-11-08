import '../styles/field.css';

function Experience() {
  return (
    <div className='field'>
      <h2>Experience</h2>
      <div className="field-row">
        <h3>Company Name</h3>
        <input type="text" />
      </div>
      <div className="field-row">
        <h3>Position Title</h3>
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
      <div className="field-row">
        <h3>Description</h3>
        <input type="text" />
      </div>
    </div>

  );
}

export default Experience;