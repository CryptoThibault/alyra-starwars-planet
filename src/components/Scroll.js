const Scroll = ({ page, setPage }) => {
  return (
    <div>
      <button className="btn btn-dark" onClick={() => setPage(page + 1)}>Suivantes</button>
    </div>
  );
};

export default Scroll;