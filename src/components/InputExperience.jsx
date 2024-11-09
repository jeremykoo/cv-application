/* eslint-disable react/prop-types */

import { useState } from 'react';
import '../styles/field.css';

function InputExperience({ experience, setExperience }) {
  function handleChange(event) {
    setExperience({
      ...experience,
      [event.target.id]: event.target.value
    });
  };

  return (
    <div className='drop-field'>
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
      <button>Save</button>
    </div>
  );
}

function EmptyExpInput({ entries, setEntries, handleVisible }) {
  const [entry, setEntry] = useState({
    id: crypto.randomUUID(),
    company: '',
    position: '',
    exp_start: '',
    exp_end: '',
    exp_location: '',
    description: ''
  });

  function handleSubmit(event) {
    event.preventDefault();
    setEntries([
      ...entries,
      entry
    ]);
    handleVisible();
  }

  function handleChange(event) {
    setEntry({
      ...entry,
      [event.target.id]: event.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className='drop-field'>
      <div className="field-row">
        <h3>Company Name</h3>
        <input
          id='company'
          type="text"
          value={entry.company}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>Position Title</h3>
        <input
          id='position'
          type="text"
          value={entry.position}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>Start Date</h3>
        <input
          id='exp_start'
          type="text"
          value={entry.exp_start}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>End Date</h3>
        <input
          id='exp_end'
          type="text"
          value={entry.exp_end}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>Location</h3>
        <input
          id='exp_location'
          type="text"
          value={entry.exp_location}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>Description</h3>
        <input
          id='description'
          type="text"
          value={entry.description}
          onChange={handleChange}
        />
      </div>
      <button type='submit'>Add</button>
    </form>
  );
}

export { EmptyExpInput };

export default InputExperience;