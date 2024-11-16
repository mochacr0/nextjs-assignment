import { BlogContentModel, VideoHeaderMedia } from "@/models/blogModels";
import BlogContent from "./BlogContent";
import BlogRelatedPostsNavigation from "./BlogRelatedPostsNavigater";
import BlogVideoHeader from "./BlogVideoHeader";

type VideoBlogProps = {
  headerMedia: VideoHeaderMedia;
  content: BlogContentModel;
};

const VideoBlog = ({ headerMedia, content }: VideoBlogProps) => {
  return (
    <article className="format-Video">
      <BlogVideoHeader headerMedia={headerMedia} />
      <BlogContent content={content} />
      <BlogRelatedPostsNavigation />
    </article>
  );
};

export default VideoBlog;
