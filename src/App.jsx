import { useState, useRef } from 'react'
import './App.css'
import PersonalDetails from './components/PersonalDetails';
import Resume from './components/Resume';
import Options from './components/Options';
import DropDown from './components/DropDown';
import DisplayHandler from './components/DisplayHandler';
import Externals from './components/Externals';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function App() {
  const [details, setDetails] = useState({ 
    name: 'John Smith',
    email: 'johnsmith@gmail.com',
    phone: '123-456-7890',
    address: 'Baltimore, Maryland',
  });

  const [education, setEducation] = useState([
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
  ]);

  const [experience, setExperience] = useState([
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
  ]);

  const contentRef = useRef();

  const savePDF = () => {
    html2canvas(contentRef.current, { scale: 3 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      
      const pdf = new jsPDF("p", "mm", "a4"); 
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
      const imgWidth = canvas.width * ratio;
      const imgHeight = canvas.height * ratio;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className='layout'>
      <Externals details={details} education={education} experience={experience} savePDF={savePDF}/>
      <div className='info-column'>
        <Options setDetails={setDetails} setEducation={setEducation} setExperience={setExperience}/>
        <PersonalDetails details={details} setDetails={setDetails} />
        <DropDown title='Education'>
          <DisplayHandler title='Education' entries={education} setEntries={setEducation} />
        </DropDown>
        <DropDown title='Experience'>
          <DisplayHandler title='Experience' entries={experience} setEntries={setExperience} />
        </DropDown>
      </div>
      <Resume contentRef={contentRef} details={details} education={education} experience={experience}/>
    </div>
  )
}

export default App
