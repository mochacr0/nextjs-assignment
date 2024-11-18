import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { blogs } from "@/common/data/blogData";
import { categories } from "@/common/data/categoryData";
import { getServerSession } from "next-auth";
import Image from "next/image";

const MainNavigation = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav id="main-nav-wrap">
      <ul className="main-navigation sf-menu">
        <li className="current">
          <a href="/" title="">
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
          <a href="/blogs/standard-blog" title="">
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
        <li className="has-children">
          {session?.user ? (
            <>
              <Image
                src="/images/avatars/default-user.png"
                alt="User Avatar"
                width={30}
                height={30}
                className="avatar"
              />
              <ul className="sub-menu">
                <li>
                  <a href="/manage-contacts" title="">
                    Contacts
                  </a>
                </li>
                <li>
                  <a href="/logout" title="">
                    Logout
                  </a>
                </li>
              </ul>
            </>
          ) : (
            <a href="/login" title="">
              Login
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
