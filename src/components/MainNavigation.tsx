import { blogs } from "@/common/data/blogData";
import { categories } from "@/common/data/categoryData";
import Link from "next/link";

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
          <a href="/categories" title="">
            Categories
          </a>
          <ul className="sub-menu">
            {categories.map((category, index) => {
              return (
                <li key={category}>
                  <a href={`/categories?category=${category}`}>{category}</a>
                </li>
              );
            })}
          </ul>
        </li>
        <li className="has-children">
          <a href="single-standard.html" title="">
            Blog
          </a>
          <ul className="sub-menu">
            {blogs.map((blog) => {
              return (
                <li key={blog.slug}>
                  <a href={`/blogs/${blog.slug}`}>{blog.title}</a>
                </li>
              );
            })}
            {/* <li>
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
            </li> */}
          </ul>
        </li>
        <li>
          <a href="/style-guide" title="">
            Styles
          </a>
        </li>
        <li>
          <a href="/about" title="">
            About
          </a>
        </li>
        <li>
          <a href="/contact" title="">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
