/* eslint-disable react/prop-types */
import '../styles/resume.css';

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
          {/* <div className='listing'>
            <div className='left'>
              <p>08/2020 - present</p>
              <p>New York City, US</p>
            </div>
            <div className='right'>
              <p>Lousiana State University</p>
              <p>Masters in Mathematics</p>
            </div>
          </div> */}
        </div>
        
        <div className='resume-section'>
          <h2>Experience</h2>
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
          {/* <div className='listing'>
            <div className='left'>
              <p>08/2020 - 11/2024</p>
              <p>Los Angeles, CA</p>
            </div>
            <div className='right'>
              <p>Microsoft</p>
              <p>Software Engineer</p>
              <p>Duis malesuada sociosqu sodales dignissim magna accumsan dis. Lacus hendrerit ultricies mollis himenaeos amet eget. Est rhoncus mauris euismod quis dignissim. Aenean lorem quisque faucibus euismod fringilla nibh vel etiam bibendum. Mauris purus class vivamus gravida convallis vestibulum. </p>
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default Resume;