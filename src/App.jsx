/* eslint-disable react/prop-types */

import { useState } from 'react'
import './App.css'
import PersonalDetails from './components/PersonalDetails';
import Education from './components/Education';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Options from './components/Options';

function App() {
  const [details, setDetails] = useState({ 
    name: 'John Smith',
    email: 'johnsmith@gmail.com',
    phone: '123-456-7890',
    address: 'Baltimore, Maryland',
  });

  return (
    <div className='layout'>
      
      <div className='info-column'>
        <Options />
        <PersonalDetails details={details} setDetails={setDetails} />
        <Education />
        <Experience />
      </div>
      <Resume details={details}/>
    </div>
  )
}

export default App
