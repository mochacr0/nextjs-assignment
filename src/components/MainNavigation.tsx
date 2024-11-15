const MainNavigation: React.FC = () => {
  return (
    <nav id="main-nav-wrap">
      <ul className="main-navigation sf-menu">
        <li className="current">
          <a href="index.html" title="">
            Home
          </a>
        </li>
        <li className="has-children">
          <a href="category.html" title="">
            Categories
          </a>
          <ul className="sub-menu">
            <li>
              <a href="category.html">Wordpress</a>
            </li>
            <li>
              <a href="category.html">HTML</a>
            </li>
            <li>
              <a href="category.html">Photography</a>
            </li>
            <li>
              <a href="category.html">UI</a>
            </li>
            <li>
              <a href="category.html">Mockups</a>
            </li>
            <li>
              <a href="category.html">Branding</a>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <a href="single-standard.html" title="">
            Blog
          </a>
          <ul className="sub-menu">
            <li>
              <a href="single-video.html">Video Post</a>
            </li>
            <li>
              <a href="single-audio.html">Audio Post</a>
            </li>
            <li>
              <a href="single-gallery.html">Gallery Post</a>
            </li>
            <li>
              <a href="single-standard.html">Standard Post</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="style-guide.html" title="">
            Styles
          </a>
        </li>
        <li>
          <a href="about.html" title="">
            About
          </a>
        </li>
        <li>
          <a href="contact.html" title="">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
