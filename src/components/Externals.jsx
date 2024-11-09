
function Externals() {
  function handlePrint() {
    print();
  }

  return (
    <div className="externals shadow">
      <button>Save</button>
      <button onClick={handlePrint}>Print</button>
    </div>
  );
}

export default Externals;