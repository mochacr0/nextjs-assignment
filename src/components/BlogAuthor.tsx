import { BlogAuthorModel } from "@/models/blogModels";

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
                <li key={index}>
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

{
  /* <li>
<a href="#">Facebook</a>
</li>
<li>
<a href="#">Twitter</a>
</li>
<li>
<a href="#">GooglePlus</a>
</li>
<li>
<a href="#">Instagram</a>
</li> */
}
export default BlogAuthor;
