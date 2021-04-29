const Scroll = ({ page, setPage }) => {
  if (page !== 3) { return (<button className="btn btn-dark" onClick={() => setPage(page + 1)} disabled={page === 3}>Suivantes</button>) }

};

export default Scroll;