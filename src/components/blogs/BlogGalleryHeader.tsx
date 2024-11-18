import { GalleryHeaderMedia } from "@/models/blogModels";

type BlogGalleryHeaderProps = {
  headerMedia: GalleryHeaderMedia;
};

const BlogGalleryHeader = ({ headerMedia }: BlogGalleryHeaderProps) => {
  return (
    <div className="content-media">
      <div className="post-slider flexslider">
        <ul className="slides">
          {headerMedia.slideUrls.map((slideUrl, index) => (
            <li key={`${slideUrl} ${index}`}>
              <img src={slideUrl} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogGalleryHeader;
