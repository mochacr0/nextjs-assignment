import { BlogContentModel, AudioHeaderMedia } from "@/models/blogModels";
import BlogContent from "./BlogContent";
import BlogRelatedPostsNavigation from "./BlogRelatedPostsNavigater";
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
