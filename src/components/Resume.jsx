/* eslint-disable react/prop-types */
import '../styles/resume.css';

function EduField({ education }) {
  return (
    <div className='listing'>
      <div className='left'>
        <p>{education.edu_start} - {education.edu_end}</p>
        <p>{education.edu_location}</p>
      </div>
      <div className='right'>
        <p>{education.school}</p>
        <p>{education.degree}</p>
      </div>
    </div>
  );
}

function ExpField({ experience }) {
  return (
    <div className='listing'>
      <div className='left'>
        <p>{experience.exp_start} - {experience.exp_end}</p>
        <p>{experience.exp_location}</p>
      </div>
      <div className='right'>
        <p>{experience.company}</p>
        <p>{experience.position}</p>
        <p>{experience.description}</p>
      </div>
    </div>
  )
}

function Resume({ details, education, experience }) {
  return (
    <div className="resume">
      <header>
        <h1>{details.name}</h1>
        <div className='contact'>
          <p>{details.email}</p>
          <p>{details.phone}</p>
          <p>{details.address}</p>
        </div>
      </header>
      <main>
        <div className='resume-section'>
          <h2>Education</h2>
          <EduField education={education}/>
        </div>
        <div className='resume-section'>
          <h2>Experience</h2>
          <ExpField experience={experience}/>
        </div>
      </main>
    </div>
  );
};

export default Resume;