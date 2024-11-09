/* eslint-disable react/prop-types */

import '../styles/displayhandler.css'
import { useState } from "react";

function Entry({ type, entry}) {
  return (
    <div className='entry'>
        {type==='Education' ? entry.school : entry.company}
      <div className='icons'>
        <button>Edit</button>
        <button>Trash</button>
      </div>
    </div>
  );
}

function AddButton({ title, onClick }) {
  return (
    <button className='add-button' onClick={onClick}>+ {title}</button>
  );
}

function DisplayHandler({ title, entries, children }) {
  const [inputVisible, setInputVisible] = useState(false);

  function handleClick() {
    setInputVisible(!inputVisible);
    console.log('add button clicked');
  }

  return (
    <div>
      {entries.map((entry) => (
        <Entry key={title==='Education' ? entry.school : entry.company} type={title} entry={entry} />
      ))}
      {!inputVisible && 
        <div className='button-bg'>
          <AddButton title={title} onClick={handleClick}/>
        </div>}
      {inputVisible && children}
    </div>
  );
}

export default DisplayHandler;