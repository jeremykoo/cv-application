import { useState } from 'react'
import './App.css'
import PersonalDetails from './components/PersonalDetails';
import Education from './components/Education';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Options from './components/Options';
import DropDown from './components/DropDown';

function App() {
  const [details, setDetails] = useState({ 
    name: 'John Smith',
    email: 'johnsmith@gmail.com',
    phone: '123-456-7890',
    address: 'Baltimore, Maryland',
  });

  const [education, setEducation] = useState([
    {
      school: 'Ohio State University',
      degree: 'Bachelors of Biology',
      edu_start: '08/2020',
      edu_end: 'present',
      edu_location: 'New York City, US'
    },
    {
      school: 'Boston College',
      degree: 'Masters in Mathematics',
      edu_start: '08/2020',
      edu_end: '02/1999',
      edu_location: 'Boston, MA'
    },
  ]);

  const [experience, setExperience] = useState([
    {
      company: 'McDonalds',
      position: 'Cashier',
      exp_start: '11/2018',
      exp_end: '04/2022',
      exp_location: 'Los Angeles, CA',
      description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Eleifend suspendisse malesuada posuere litora etiam posuere. Potenti cursus torquent litora netus dolor a odio.'
    },
    {
      company: 'Blizzard',
      position: 'Game Designer',
      exp_start: '11/2018',
      exp_end: '04/2022',
      exp_location: 'Austin, TX',
      description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Eleifend suspendisse malesuada posuere litora etiam posuere. Potenti cursus torquent litora netus dolor a odio.'
    },
  ]);

  return (
    <div className='layout'>
      <div className='info-column'>
        <Options />
        <PersonalDetails details={details} setDetails={setDetails} />
        <DropDown title='Education'>
          <Education education={education} setEducation={setEducation}/>
        </DropDown>
        <DropDown title='Experience'>
          <Experience experience={experience} setExperience={setExperience}/>
        </DropDown>
      </div>
      <Resume details={details} education={education} experience={experience}/>
    </div>
  )
}

export default App
