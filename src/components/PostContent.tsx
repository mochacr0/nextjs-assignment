import Link from "next/link";

type PostContentProps = {
  articleUrl: string;
  categories: string[];
  title: string;
  excerpt: string;
};

const PostContent: React.FC<PostContentProps> = (props) => {
  return (
    <div className="entry-text">
      {/* tag & title */}
      <div className="entry-header">
        <div className="entry-meta">
          <span className="cat-links">
            {props.categories.map((category, index) => {
              return (
                <Link key={`${category} ${index}`} href="#">
                  {category}
                </Link>
              );
            })}
          </span>
        </div>

        <h1 className="entry-title">
          <a href={props.articleUrl}>{props.title}</a>
        </h1>
      </div>
      {/* entry content */}
      <div className="entry-excerpt">{props.excerpt}</div>
    </div>
  );
};

export default PostContent;
