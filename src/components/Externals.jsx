/* eslint-disable react/prop-types */

function Externals({ savePDF }) {

  function handlePrint() {
    print();
  }

  return (
    <div className="externals shadow">
      <button onClick={savePDF}>Save<br />PDF</button>
      <button onClick={handlePrint}>Print</button>
    </div>
  );
}

export default Externals;