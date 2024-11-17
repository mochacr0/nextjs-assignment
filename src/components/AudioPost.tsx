import { AudioPostModel as AudioPostProps } from "@/models/postModels";
import Link from "next/link";
import PostContent from "./PostContent";

const AudioPost: React.FC<AudioPostProps> = (props) => {
  return (
    <article className="brick entry format-audio animate-this">
      <div className="entry-thumb">
        <Link href="single-audio.html" className="thumb-link">
          <img src="/images/thumbs/concert.jpg" alt="concert" />
        </Link>

        <div className="audio-wrap">
          <audio
            id="player"
            src={props.audioSourceUrl}
            controls={true}
            style={{ width: "100%" }}
          ></audio>
        </div>
      </div>
      <PostContent
        articleUrl={props.articleUrl}
        categories={props.categories}
        title={props.title}
        excerpt={props.excerpt}
      />{" "}
    </article>
  );
};

export default AudioPost;
