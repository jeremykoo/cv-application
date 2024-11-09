/* eslint-disable react/prop-types */

import { useState } from 'react';
import '../styles/field.css';

function EditEduInput({ currentEntry, entries, setEntries}) {
  const [entry, setEntry] = useState({
    ...currentEntry
  });

  function handleChange(event) {
    setEntry({
      ...entry,
      [event.target.id]: event.target.value
    });
    setEntries(entries.map((obj) => obj.id === entry.id ? entry : obj));
  };

  return (
    <form className='drop-field editing'>
      <div className="field-row">
        <h3>School</h3>
        <input
          id='school'
          type="text"
          value={entry.school}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>Degree</h3>
        <input
          id='degree'
          type="text"
          value={entry.degree}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>Start Date</h3>
        <input
          id='edu_start'
          type="text"
          value={entry.edu_start}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>End Date</h3>
        <input
          id='edu_end'
          type="text"
          value={entry.edu_end}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>Location</h3>
        <input
          id='edu_location'
          type="text"
          value={entry.edu_location}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

function EmptyEduInput({ entries, setEntries, handleVisible }) {
  const [entry, setEntry] = useState({
    id: crypto.randomUUID(),
    school: '',
    degree: '',
    edu_start: '',
    edu_end: '',
    edu_location: ''
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
        <h3>School</h3>
        <input
          id='school'
          type="text"
          value={entry.school}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>Degree</h3>
        <input
          id='degree'
          type="text"
          value={entry.degree}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>Start Date</h3>
        <input
          id='edu_start'
          type="text"
          value={entry.edu_start}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>End Date</h3>
        <input
          id='edu_end'
          type="text"
          value={entry.edu_end}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>Location</h3>
        <input
          id='edu_location'
          type="text"
          value={entry.edu_location}
          onChange={handleChange}
        />
      </div>
      <button type='submit'>Add</button>
    </form>
  );
}

export { EditEduInput, EmptyEduInput };