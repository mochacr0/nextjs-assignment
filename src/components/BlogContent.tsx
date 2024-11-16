import { BlogContentModel } from "@/models/blogModels";
import parse from "html-react-parser";
import BlogAuthor from "./BlogAuthor";
import BlogMeta from "./BlogMeta";
import BlogTags from "./BlogTags";

type BlogContentProps = {
  content: BlogContentModel;
};

const BlogContent = ({ content }: BlogContentProps) => {
  return (
    <div className="primary-content">
      <BlogMeta meta={content.meta} />
      {parse(content.body)}
      <BlogTags tags={content.tags} />
      <BlogAuthor author={content.author} />
    </div>
  );
};

export default BlogContent;
