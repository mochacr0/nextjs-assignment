import Pagination from "@/components/Pagination";
import AudioPost from "@/components/posts/AudioPost";
import GalleryPost from "@/components/posts/GalleryPost";
import LinkPost from "@/components/posts/LinkPost";
import QuotePost from "@/components/posts/QuotePost";
import StandardPost from "@/components/posts/StandardPost";
import VideoPost from "@/components/posts/VideoPost";
import { PostsPaginationModel } from "@/models/paginationModels";
import { v4 as uuidv4 } from "uuid";

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
              const key = uuidv4();
              if ("audioSourceUrl" in post) {
                return <AudioPost key={key} {...post} />;
              } else if ("quote" in post) {
                return <QuotePost key={key} {...post} />;
              } else if ("imageUrls" in post) {
                return <GalleryPost key={key} {...post} />;
              } else if ("link" in post) {
                return <LinkPost key={key} {...post} />;
              } else if ("videoSourceUrl" in post) {
                return <VideoPost key={key} {...post} />;
              } else {
                return <StandardPost key={key} {...post} />;
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
