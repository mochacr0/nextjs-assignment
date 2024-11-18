import { BlogAuthorModel } from "@/models/blogModels";
import { v4 as uuidv4 } from "uuid";

type BlogAuthorProps = {
  author: BlogAuthorModel;
};

const BlogAuthor = ({ author }: BlogAuthorProps) => {
  return (
    <div className="author-profile">
      <img src={author.avatarUrl} alt={author.avatarAlt ?? ""} />

      <div className="about">
        <h4>
          <a href="#">{author.name}</a>
        </h4>

        <p>{author.about}</p>

        {author.socialLinks && (
          <ul className="author-social">
            {author.socialLinks.map((socialLink, index) => {
              return (
                <li key={uuidv4()}>
                  <a href={socialLink.url}>{socialLink.platform}</a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BlogAuthor;
