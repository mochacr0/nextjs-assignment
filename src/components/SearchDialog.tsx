const SearchDialog: React.FC = () => {
  return (
    <div className="search-wrap">
      <form role="search" method="get" className="search-form" action="#">
        <label>
          <span className="hide-content">Search for:</span>
          <input
            type="search"
            className="search-field"
            placeholder="Type Your Keywords"
            name="search"
            title="Search for:"
            autoComplete="off"
          />
        </label>
        <input type="submit" className="search-submit" value="search" />
      </form>

      <a href="#" id="close-search" className="close-btn">
        Close
      </a>
    </div>
  );
};

export default SearchDialog;
