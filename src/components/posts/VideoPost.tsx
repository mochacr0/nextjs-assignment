import Link from "next/link";
import { VideoPostModel as VideoPostProps } from "@/models/postModels";

const VideoPost: React.FC<VideoPostProps> = (props) => {
  return (
    <article className="brick entry format-video animate-this">
      <div className="entry-thumb video-image">
        <a href={props.videoSourceUrl} data-lity>
          <img src={props.thumbnailUrl} alt={props.thumbnailAlt} />
        </a>
      </div>

      <div className="entry-text">
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
        <div className="entry-excerpt">{props.excerpt}</div>
      </div>
    </article>
  );
};

export default VideoPost;
