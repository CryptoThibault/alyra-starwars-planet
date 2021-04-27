const Scroll = ({ size, setSize }) => {
  return (
    <div>
      <button className="btn btn-dark" onClick={() => setSize(size + 10)}>Suivantes</button>
    </div>
  );
};

export default Scroll;