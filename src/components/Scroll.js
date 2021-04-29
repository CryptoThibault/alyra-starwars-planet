const Scroll = ({ page, setPage }) => {
  return page !== 3
    ? (<button className="btn btn-dark" onClick={() => setPage(page + 1)}>Suivantes</button>)
    : (<div className="bg-dark text-white p-3">All the planets has been listed.</div>)

};

export default Scroll;