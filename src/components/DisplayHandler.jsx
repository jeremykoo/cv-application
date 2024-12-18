/* eslint-disable react/prop-types */

import '../styles/displayhandler.css'
import { useState } from "react";
import { EditEduInput, EmptyEduInput } from './InputEducation';
import { EditExpInput, EmptyExpInput } from './InputExperience';

function Entry({ type, entries, entry, setEntries }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleDelete() {
    setEntries(entries.filter((obj) => obj.id !== entry.id))
  }

  function handleEdit() {
    setIsEditing(!isEditing);
  }

  return (
    <div>
      <div className={`entry ${isEditing ? 'editing' : ''}`}>
        {type==='Education' ? entry.school : entry.company}
        <div className='icons'>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      {isEditing && type==='Education' && <EditEduInput currentEntry={entry} entries={entries} setEntries={setEntries}/>}
      {isEditing && type==='Experience' && <EditExpInput currentEntry={entry} entries={entries} setEntries={setEntries}/>}
    </div>
  );
}

function AddButton({ title, onClick }) {
  return (
    <button className='add-button' onClick={onClick}>+ {title}</button>
  );
}

function DisplayHandler({ title, entries, setEntries}) {
  const [inputVisible, setInputVisible] = useState(false);

  function handleVisible() {
    setInputVisible(!inputVisible);
  }

  return (
    <div>
      {entries.map((entry) => (
        <Entry key={entry.id} type={title} entries={entries} entry={entry} setEntries={setEntries} handleVisible={handleVisible}/>
      ))}
      {!inputVisible && 
        <div className='button-bg'>
          <AddButton title={title} onClick={handleVisible}/>
        </div>}
      {inputVisible && title==='Education' && <EmptyEduInput entries={entries} setEntries={setEntries} handleVisible={handleVisible}/>}
      {inputVisible && title==='Experience' && <EmptyExpInput entries={entries} setEntries={setEntries} handleVisible={handleVisible}/>}
    </div>
  );
}

export default DisplayHandler;