import { StandardPostModel as StandardPostProps } from "@/models/postModels";
import PostContent from "./PostContent";

const StandardPost: React.FC<StandardPostProps> = (props) => {
  return (
    <article className="brick entry format-standard animate-this">
      {/* thumbnail href, img, */}
      <div className="entry-thumb">
        <a href={props.articleUrl} className="thumb-link">
          <img src={props.thumbnailUrl} alt={props.thumbnailAlt} />
        </a>
      </div>

      {/* text */}
      <PostContent
        articleUrl={props.articleUrl}
        categories={props.categories}
        title={props.title}
        excerpt={props.excerpt}
      />
    </article>
  );
};

export default StandardPost;
