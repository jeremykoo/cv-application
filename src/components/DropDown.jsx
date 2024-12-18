/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../styles/dropdown.css';

function DropDown({ title, children }) {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(!isVisible);
  }
  
  return (
    <div>
      <div className={`heading ${isVisible ? 'drop-title' : 'field'}`} onClick={handleClick}>
        <h2>{title}</h2>
        <p className={`${isVisible ? 'rotated' : ''}`}>^</p>
      </div>
      {isVisible && children}
    </div>
  )
}


export default DropDown;