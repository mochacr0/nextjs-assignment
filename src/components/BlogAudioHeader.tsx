import { AudioHeaderMedia } from "@/models/blogModels";

type BlogAudioHeaderProps = {
  headerMedia: AudioHeaderMedia;
};

const BlogAudioHeader = ({ headerMedia }: BlogAudioHeaderProps) => {
  return (
    <div className="content-media">
      <div className="post-thumb">
        <img src={headerMedia.thumbnailUrl} alt={headerMedia.thumbnailAlt} />
      </div>
      <div className="audio-wrap">
        <audio
          id="player2"
          src={headerMedia.audioSourceUrl}
          controls={true}
          style={{ width: "100%" }}
        ></audio>
      </div>
    </div>
  );
};

export default BlogAudioHeader;
