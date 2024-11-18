import { BlogContentModel, GalleryHeaderMedia } from "@/models/blogModels";
import BlogContent from "./BlogContent";
import BlogRelatedPostsNavigation from "./BlogRelatedPostsNavigation";
import BlogGalleryHeader from "./BlogGalleryHeader";

type GalleryBlogProps = {
  headerMedia: GalleryHeaderMedia;
  content: BlogContentModel;
};

const GalleryBlog = ({ headerMedia, content }: GalleryBlogProps) => {
  return (
    <article className="format-gallery">
      <BlogGalleryHeader headerMedia={headerMedia} />
      <BlogContent content={content} />
      <BlogRelatedPostsNavigation />
    </article>
  );
};

export default GalleryBlog;
