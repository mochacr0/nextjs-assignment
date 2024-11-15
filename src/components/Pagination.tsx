const Pagination: React.FC = () => {
  return (
    <div className="row">
      <nav className="pagination">
        <span className="page-numbers prev inactive">Prev</span>
        <span className="page-numbers current">1</span>
        <a href="#" className="page-numbers">
          2
        </a>
        <a href="#" className="page-numbers">
          3
        </a>
        <a href="#" className="page-numbers">
          4
        </a>
        <a href="#" className="page-numbers">
          5
        </a>
        <a href="#" className="page-numbers">
          6
        </a>
        <a href="#" className="page-numbers">
          7
        </a>
        <a href="#" className="page-numbers">
          8
        </a>
        <a href="#" className="page-numbers">
          9
        </a>
        <a href="#" className="page-numbers next">
          Next
        </a>
      </nav>
    </div>
  );
};

export default Pagination;
