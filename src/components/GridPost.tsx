import { GridPostSlideModel } from "@/models/postModels";
import React from "react";
import GridPostSlide from "./GridPostSlice";

type GridPostProps = {
  slides: GridPostSlideModel[];
};

const GridPost: React.FC<GridPostProps> = ({ slides }) => {
  return (
    <div className="brick entry featured-grid animate-this">
      <div className="entry-content">
        <div id="featured-post-slider" className="flexslider">
          <ul className="slides">
            {slides.map((slide, index) => {
              return (
                <GridPostSlide
                  key={`${slide.title} ${index}`}
                  author={slide.author}
                  backgroundUrl={slide.backgroundUrl}
                  publishedDate={slide.publishedDate}
                  title={slide.title}
                  articleUrl={slide.articleUrl}
                />
              );
            })}
            {/* <li>
              <div className="featured-post-slide">
                <div
                  className="post-background"
                  style={{
                    backgroundImage:
                      "url('/images/thumbs/featured/featured-1.jpg')",
                  }}
                ></div>

                <div className="overlay"></div>

                <div className="post-content">
                  <ul className="entry-meta">
                    <li>September 06, 2016</li>
                    <li>
                      <a href="#">Naruto Uzumaki</a>
                    </li>
                  </ul>

                  <h1 className="slide-title">
                    <a href="single-standard.html" title="">
                      Minimalism Never Goes Out of Style
                    </a>
                  </h1>
                </div>
              </div>
            </li>

            <li>
              <div className="featured-post-slide">
                <div
                  className="post-background"
                  style={{
                    backgroundImage:
                      "url('/images/thumbs/featured/featured-2.jpg')",
                  }}
                ></div>

                <div className="overlay"></div>

                <div className="post-content">
                  <ul className="entry-meta">
                    <li>August 29, 2016</li>
                    <li>
                      <a href="#">Sasuke Uchiha</a>
                    </li>
                  </ul>

                  <h1 className="slide-title">
                    <a href="single-standard.html" title="">
                      Enhancing Your Designs with Negative Space
                    </a>
                  </h1>
                </div>
              </div>
            </li>

            <li>
              <div className="featured-post-slide">
                <div
                  className="post-background"
                  style={{
                    backgroundImage:
                      "url('/images/thumbs/featured/featured-3.jpg')",
                  }}
                ></div>

                <div className="overlay"></div>

                <div className="post-content">
                  <ul className="entry-meta">
                    <li>August 27, 2016</li>
                    <li>
                      <a href="#" className="author">
                        Naruto Uzumaki
                      </a>
                    </li>
                  </ul>

                  <h1 className="slide-title">
                    <a href="single-standard.html" title="">
                      Music Album Cover Designs for Inspiration
                    </a>
                  </h1>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GridPost;
