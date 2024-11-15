import getPosts, { gridPostSlides } from "@/common/data/postData";
import AudioPost from "@/components/AudioPost";
import GalleryPost from "@/components/GalleryPost";
import GridPost from "@/components/GridPost";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import LinkPost from "@/components/LinkPost";
import Pagination from "@/components/Pagination";
import Preloader from "@/components/Preloader";
import QuotePost from "@/components/QuotePost";
import StandardPost from "@/components/StandardPost";
import VideoPost from "@/components/VideoPost";

export default function Home() {
  return (
    <>
      <Header />

      <section id="bricks">
        <div className="row masonry">
          <div className="bricks-wrapper">
            <div className="grid-sizer"></div>

            <GridPost slides={gridPostSlides} />

            {getPosts().map((post, index) => {
              if ("audioSourceUrl" in post) {
                return <AudioPost key={index} {...post} />;
              } else if ("quote" in post) {
                return <QuotePost key={index} {...post} />;
              } else if ("imageUrls" in post) {
                return <GalleryPost key={index} {...post} />;
              } else if ("link" in post) {
                return <LinkPost key={index} {...post} />;
              } else if ("videoSourceUrl" in post) {
                return <VideoPost key={index} {...post} />;
              } else {
                return <StandardPost key={index} {...post} />;
              }
            })}
          </div>
        </div>

        <Pagination />
      </section>

      <Footer />

      <Preloader />
    </>
  );
}
