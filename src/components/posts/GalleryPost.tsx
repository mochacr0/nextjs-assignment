import { GalleryPostModel as GalleryPostProps } from "@/models/postModels";
import PostContent from "./PostContent";
import Image from "next/image";

const GalleryPost: React.FC<GalleryPostProps> = (props) => {
  return (
    <article className="brick entry format-gallery group animate-this">
      <div className="entry-thumb">
        <div className="post-slider flexslider">
          <ul className="slides">
            {props.imageUrls.map((imageUrl, index) => (
              <li key={`${imageUrl} ${index}`}>
                <Image src={imageUrl} alt={imageUrl} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <PostContent
        articleUrl={props.articleUrl}
        categories={props.categories}
        title={props.title}
        excerpt={props.excerpt}
      />
    </article>
  );
};

export default GalleryPost;
