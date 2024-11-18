import { getBlogBySlug } from "@/common/data/blogData";
import AudioBlog from "@/components/blogs/AudioBlog";
import GalleryBlog from "@/components/blogs/GalleryBlog";
import StandardBlog from "@/components/blogs/StandardBlog";
import VideoBlog from "@/components/blogs/VideoBlog";
import { BlogType } from "@/models/blogModels";
import { notFound } from "next/navigation";

const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) {
    notFound();
  }

  switch (blog.type) {
    case BlogType.STANDARD:
      return (
        <StandardBlog headerMedia={blog.headerMedia} content={blog.content} />
      );
    case BlogType.GALLERY:
      return (
        <GalleryBlog headerMedia={blog.headerMedia} content={blog.content} />
      );
    case BlogType.AUDIO:
      return (
        <AudioBlog headerMedia={blog.headerMedia} content={blog.content} />
      );
    case BlogType.VIDEO:
      return (
        <VideoBlog headerMedia={blog.headerMedia} content={blog.content} />
      );
    default:
      notFound();
  }
};

export default BlogPage;
