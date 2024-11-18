import { BlogContentModel, AudioHeaderMedia } from "@/models/blogModels";
import BlogRelatedPostsNavigation from "./BlogRelatedPostsNavigation";
import BlogContent from "./BlogContent";
import BlogAudioHeader from "./BlogAudioHeader";

type AudioBlogProps = {
  headerMedia: AudioHeaderMedia;
  content: BlogContentModel;
};

const AudioBlog = ({ headerMedia, content }: AudioBlogProps) => {
  return (
    <article className="format-audio">
      <BlogAudioHeader headerMedia={headerMedia} />
      <BlogContent content={content} />
      <BlogRelatedPostsNavigation />
    </article>
  );
};

export default AudioBlog;
