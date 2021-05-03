const Scroll = ({ page, setPage, next }) => {
  return next
    ? (<button className="btn btn-dark" onClick={() => setPage(page + 1)}>Suivantes</button>)
    : (<div className="bg-dark text-white p-3">All the planets has been listed.</div>)

};

export default Scroll;