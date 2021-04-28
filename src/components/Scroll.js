const Scroll = ({ size, setSize }) => {
  return (
    <div>
      <button className="btn btn-dark" onClick={() => setSize(size + 1)}>Suivantes</button>
    </div>
  );
};

export default Scroll;