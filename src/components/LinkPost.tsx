import { LinkPostModel as LinkPostProps } from "@/models/postModels";

const LinkPost: React.FC<LinkPostProps> = (props) => {
  return (
    <article className="brick entry format-link animate-this">
      <div className="entry-thumb">
        <div className="link-wrap">
          <p>{props.summary}</p>
          <cite>
            <a target="_blank" href={props.link}>
              {props.linkText}
            </a>
          </cite>
        </div>
      </div>
    </article>
  );
};

export default LinkPost;
