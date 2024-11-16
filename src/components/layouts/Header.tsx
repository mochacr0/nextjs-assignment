import MainNavigation from "../MainNavigation";
import SearchDialog from "../SearchDialog";

const Header = () => {
  return (
    <header className="short-header">
      <div className="gradient-block"></div>

      <div className="row header-content">
        <div className="logo">
          <a href="/">Author</a>
        </div>

        <MainNavigation />

        <SearchDialog />

        <div className="triggers">
          <a className="search-trigger" href="#">
            <i className="fa fa-search"></i>
          </a>
          <a className="menu-toggle" href="#">
            <span>Menu</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
