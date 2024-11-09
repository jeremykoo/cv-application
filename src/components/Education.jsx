/* eslint-disable react/prop-types */

import '../styles/field.css';

function Education({ education, setEducation }) {
  function handleChange(event) {
    setEducation({
      ...education,
      [event.target.id]: event.target.value
    });
  };

  return (
    <div>
      <div className="field-row">
        <h3>School</h3>
        <input
          id='school'
          type="text"
          value={education.school}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>Degree</h3>
        <input
          id='degree'
          type="text"
          value={education.degree}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>Start Date</h3>
        <input
          id='edu_start'
          type="text"
          value={education.edu_start}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>End Date</h3>
        <input
          id='edu_end'
          type="text"
          value={education.edu_end}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>Location</h3>
        <input
          id='edu_location'
          type="text"
          value={education.edu_location}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Education;