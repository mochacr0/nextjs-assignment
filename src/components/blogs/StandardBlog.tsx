import { BlogContentModel, StandardHeaderMedia } from "@/models/blogModels";
import BlogContent from "./BlogContent";
import BlogRelatedPostsNavigation from "./BlogRelatedPostsNavigation";
import BlogStandardHeader from "./BlogStandardHeader";

type StandardBlogProps = {
  headerMedia: StandardHeaderMedia;
  content: BlogContentModel;
};

const StandardBlog = ({ headerMedia, content }: StandardBlogProps) => {
  return (
    <article className="format-standard">
      <BlogStandardHeader headerMedia={headerMedia} />
      <BlogContent content={content} />
      <BlogRelatedPostsNavigation />
    </article>
  );
};

export default StandardBlog;
