import { gridPostSlides } from "@/common/data/postData";
import Pagination from "@/components/Pagination";
import AudioPost from "@/components/posts/AudioPost";
import GalleryPost from "@/components/posts/GalleryPost";
import GridPost from "@/components/posts/GridPost";
import LinkPost from "@/components/posts/LinkPost";
import QuotePost from "@/components/posts/QuotePost";
import StandardPost from "@/components/posts/StandardPost";
import VideoPost from "@/components/posts/VideoPost";
import contactService from "@/database/contacts/contactService";
import { PostsPaginationModel } from "@/models/paginationModels";
import { v4 as uuidv4 } from "uuid";

type HomePageProps = {
  searchParams: Promise<{
    category: string;
    pageNumber: number;
    pageSize: number;
  }>;
};

const HomePage = async ({ searchParams }: HomePageProps) => {
  contactService.readContacts();
  const { category, pageNumber, pageSize } = await searchParams;

  const response = await fetch(
    `${process.env.BASE_API_URL}/posts/?category=${category}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
    { cache: "no-store" }
  );
  const paginatedPosts: PostsPaginationModel = await response.json();
  // const paginatedPosts: PostsPaginationModel = {
  //   items: [],
  //   hasNext: false,
  //   totalItems: 0,
  //   totalPages: 0,
  // };

  return (
    <section id="bricks">
      <div className="row masonry">
        <div className="bricks-wrapper">
          <div className="grid-sizer"></div>

          <GridPost slides={gridPostSlides} />

          {paginatedPosts.items.map((post) => {
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
  );
};

export default HomePage;
