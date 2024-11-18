import { VideoHeaderMedia } from "@/models/blogModels";

type BlogVideoHeaderProps = {
  headerMedia: VideoHeaderMedia;
};

const BlogVideoHeader = ({ headerMedia }: BlogVideoHeaderProps) => {
  return (
    <div className="content-media">
      <div className="fluid-video-wrapper">
        <iframe
          title="video"
          src={headerMedia.videoSourceUrl}
          width="640"
          height="360"
          allowFullScreen
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
};

export default BlogVideoHeader;
