import { StandardHeaderMedia } from "@/models/blogModels";

type BlogStandardHeaderProps = {
  headerMedia: StandardHeaderMedia;
};

const BlogStandardHeader = ({ headerMedia }: BlogStandardHeaderProps) => {
  return (
    <div className="content-media">
      <div className="post-thumb">
        <img src={headerMedia.thumbnailUrl} alt={headerMedia.thumbnailAlt} />
      </div>
    </div>
  );
};

export default BlogStandardHeader;
