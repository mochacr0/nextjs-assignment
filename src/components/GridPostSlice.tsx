import { GridPostSlideModel as GridPostSlideProps } from "@/models/postModels";
import Link from "next/link";

const GridPostSlide: React.FC<GridPostSlideProps> = (props) => {
  return (
    <li>
      <div className="featured-post-slide">
        <div
          className="post-background"
          style={{
            backgroundImage: `url(${props.backgroundUrl})`,
          }}
        ></div>

        <div className="overlay"></div>

        <div className="post-content">
          <ul className="entry-meta">
            <li>{props.publishedDate}</li>
            <li>
              <Link href="#">{props.author}</Link>
            </li>
          </ul>

          <h1 className="slide-title">
            <a href={props.articleUrl} title="">
              {props.author}
            </a>
          </h1>
        </div>
      </div>
    </li>
  );
};

export default GridPostSlide;
