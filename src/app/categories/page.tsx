import AudioPost from "@/components/AudioPost";
import GalleryPost from "@/components/GalleryPost";
import LinkPost from "@/components/LinkPost";
import Pagination from "@/components/Pagination";
import QuotePost from "@/components/QuotePost";
import StandardPost from "@/components/StandardPost";
import VideoPost from "@/components/VideoPost";
import { PostsPaginationModel } from "@/models/paginationModels";

type CategoriesPageProps = {
  searchParams: Promise<{
    category: string;
    pageNumber: number;
    pageSize: number;
  }>;
};

const CategoriesPage = async ({ searchParams }: CategoriesPageProps) => {
  const { category, pageNumber, pageSize } = await searchParams;

  const response = await fetch(
    `${process.env.BASE_API_URL}/posts/?category=${category}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
    { cache: "no-store" }
  );
  const paginatedPosts: PostsPaginationModel = await response.json();

  return (
    <>
      <section id="page-header">
        <div className="row current-cat">
          <div className="col-full">
            <h1>{category ? `Category: ${category}` : "Category"}</h1>
          </div>
        </div>
      </section>
      <section id="bricks" className="with-top-sep">
        <div className="row masonry">
          <div className="bricks-wrapper">
            <div className="grid-sizer"></div>

            {paginatedPosts.items.map((post, index) => {
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
        <Pagination totalPages={paginatedPosts.totalPages} />
      </section>
    </>
  );
};

export default CategoriesPage;
