/* eslint-disable react/prop-types */
import '../styles/field.css';

function PersonalDetails({ details, setDetails }) {
  function handleChange(event) {
    setDetails({
      ...details,
      [event.target.id]: event.target.value
    });
  };

  return (
    <div className='field'>
      <h2>Personal Details</h2>
      <div className="field-row">
        <h3>Full name</h3>
        <input
          id='name'
          type="text" 
          value={details.name}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>Email</h3>
        <input
          id='email'
          type="text" 
          value={details.email}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>Phone number</h3>
        <input
          id='phone'
          type="text" 
          value={details.phone}
          onChange={handleChange}
        />
      </div>
      <div className="field-row">
        <h3>Address</h3>
        <input
          id='address'
          type="text" 
          value={details.address}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default PersonalDetails;