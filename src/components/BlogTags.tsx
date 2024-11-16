type BlogTagsProps = {
  tags: string[];
};

const BlogTags = ({ tags }: BlogTagsProps) => {
  return (
    <p className="tags">
      <span>Tagged in :</span>
      {tags.map((tag, index) => (
        <a key={index} href="#">
          {tag}
        </a>
      ))}
    </p>
  );
};

export default BlogTags;
