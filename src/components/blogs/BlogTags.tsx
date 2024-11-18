import { v4 as uuidv4 } from "uuid";

type BlogTagsProps = {
  tags: string[];
};

const BlogTags = ({ tags }: BlogTagsProps) => {
  return (
    <p className="tags">
      <span>Tagged in :</span>
      {tags.map((tag, index) => (
        <a key={uuidv4()} href="#">
          {tag}
        </a>
      ))}
    </p>
  );
};

export default BlogTags;
