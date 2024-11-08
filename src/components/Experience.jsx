/* eslint-disable react/prop-types */

import '../styles/field.css';

function Experience({ experience, setExperience }) {
  function handleChange(event) {
    setExperience({
      ...experience,
      [event.target.id]: event.target.value
    });
  };

  return (
    <div className='field'>
      <h2>Experience</h2>
      <div className="field-row">
        <h3>Company Name</h3>
        <input
          id='company'
          type="text"
          value={experience.company}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>Position Title</h3>
        <input
          id='position'
          type="text"
          value={experience.position}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>Start Date</h3>
        <input
          id='exp_start'
          type="text"
          value={experience.exp_start}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>End Date</h3>
        <input
          id='exp_end'
          type="text"
          value={experience.exp_end}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>Location</h3>
        <input
          id='exp_location'
          type="text"
          value={experience.exp_location}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>Description</h3>
        <input
          id='description'
          type="text"
          value={experience.description}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Experience;