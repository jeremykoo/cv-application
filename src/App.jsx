import { useState } from 'react'
import './App.css'
import PersonalDetails from './components/PersonalDetails';
import Education from './components/Education';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Options from './components/Options';

import { InputComponent } from './components/Education';

function App() {
  const [details, setDetails] = useState({ 
    name: 'John Smith',
    email: 'johnsmith@gmail.com',
    phone: '123-456-7890',
    address: 'Baltimore, Maryland',
  });

  const [education, setEducation] = useState({
    school: 'Ohio State University',
    degree: 'Bachelors of Biology',
    start: '08/2020',
    end: 'present',
    location: 'New York City, US'
  });

  return (
    <div className='layout'>
      <div className='info-column'>
        <Options />
        <PersonalDetails details={details} setDetails={setDetails} />
        {/* <InputComponent education={education} setEducation={setEducation}/> */}
        <Education education={education} setEducation={setEducation}/>
        <Experience />
      </div>
      <Resume details={details} education={education}/>
    </div>
  )
}

export default App
