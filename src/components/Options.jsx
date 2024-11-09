/* eslint-disable react/prop-types */

import '../styles/options.css';

function Options({ setDetails, setEducation, setExperience }) {
  function handleClear() {
    setDetails({
      name: '',
      email: '',
      phone: '',
      address: '',
    });
    setEducation([]);
    setExperience([]);
  }
  
  function handleLoad() {
    const exampleDetails = {
      name: 'John Smith',
      email: 'johnsmith@gmail.com',
      phone: '123-456-7890',
      address: 'Baltimore, Maryland',
    };
    
    const exampleEducation = [
      {
        id: crypto.randomUUID(),
        school: 'Ohio State University',
        degree: 'Bachelors of Biology',
        edu_start: '08/2020',
        edu_end: 'present',
        edu_location: 'New York City, US'
      },
      {
        id: crypto.randomUUID(),
        school: 'Boston College',
        degree: 'Masters in Mathematics',
        edu_start: '08/2020',
        edu_end: '02/1999',
        edu_location: 'Boston, MA'
      },
    ];

    const exampleExperience = [
      {
        id: crypto.randomUUID(),
        company: 'McDonalds',
        position: 'Cashier',
        exp_start: '11/2018',
        exp_end: '04/2022',
        exp_location: 'Los Angeles, CA',
        description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Eleifend suspendisse malesuada posuere litora etiam posuere. Potenti cursus torquent litora netus dolor a odio.'
      },
      {
        id: crypto.randomUUID(),
        company: 'Blizzard',
        position: 'Game Designer',
        exp_start: '11/2018',
        exp_end: '04/2022',
        exp_location: 'Austin, TX',
        description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Eleifend suspendisse malesuada posuere litora etiam posuere. Potenti cursus torquent litora netus dolor a odio.'
      },
    ];

    setDetails(exampleDetails);
    setEducation(exampleEducation);
    setExperience(exampleExperience);
  }

  return (
    <div className='options field'>
      <button className='clear' onClick={handleClear}>Clear Resume</button>
      <button className='load' onClick={handleLoad}>Load Example</button>
    </div>
  );
};

export default Options;