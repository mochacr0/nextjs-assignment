import { PostsPaginationModel } from "@/models/paginationModels";
import {
  AudioPostModel,
  GridPostSlideModel,
  PostModel,
  QuotePostModel,
  StandardPostModel,
  VideoPostModel,
} from "@/models/postModels";

const standardPosts: StandardPostModel[] = [
  {
    articleUrl: "single-standard.html",
    thumbnailUrl: "/images/thumbs/diagonal-building.jpg",
    thumbnailAlt: "building",
    categories: ["Design", "Photography"],
    title: "Just a Standard Format Post.",
    excerpt: `Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
              incididunt mollit id et sit proident dolor nulla sed commodo
              est ad minim elit reprehenderit nisi officia aute incididunt
              velit sint in aliqua cillum in consequat consequat in culpa in
              anim.`,
  },
  {
    articleUrl: "single-standard.html",
    thumbnailUrl: "/images/thumbs/ferris-wheel.jpg",
    thumbnailAlt: "ferris wheel",
    categories: ["Design", "UI"],
    title: "This Is Another Standard Format Post.",
    excerpt: `Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
              incididunt mollit id et sit proident dolor nulla sed commodo
              est ad minim elit reprehenderit nisi officia aute incididunt
              velit sint in aliqua cillum in consequat consequat in culpa in
              anim.`,
  },
  {
    articleUrl: "single-standard.html",
    thumbnailUrl: "/images/thumbs/shutterbug.jpg",
    thumbnailAlt: "Shutterbug",
    categories: ["Photography", "html"],
    title: "Photography Skills Can Improve Your Graphic Design.",
    excerpt: `Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
              incididunt mollit id et sit proident dolor nulla sed commodo
              est ad minim elit reprehenderit nisi officia aute incididunt
              velit sint in aliqua cillum in consequat consequat in culpa in
              anim.`,
  },
  {
    articleUrl: "single-standard.html",
    thumbnailUrl: "/images/thumbs/usaf-rocket.jpg",
    thumbnailAlt: "USAF rocket",
    categories: ["Branding", "Mockup"],
    title: "Photography Skills Can Improve Your Graphic Design.",
    excerpt: `Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
              incididunt mollit id et sit proident dolor nulla sed commodo
              est ad minim elit reprehenderit nisi officia aute incididunt
              velit sint in aliqua cillum in consequat consequat in culpa in
              anim.`,
  },
  {
    articleUrl: "single-standard.html",
    thumbnailUrl: "/images/thumbs/diagonal-pattern.jpg",
    thumbnailAlt: "Pattern",
    categories: ["Design", "UI"],
    title: "The 10 Golden Rules of Clean Simple Design.",
    excerpt: `Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
              incididunt mollit id et sit proident dolor nulla sed commodo
              est ad minim elit reprehenderit nisi officia aute incididunt
              velit sint in aliqua cillum in consequat consequat in culpa in
              anim.`,
  },
  {
    articleUrl: "single-standard.html",
    thumbnailUrl: "/images/thumbs/lighthouse.jpg",
    thumbnailAlt: "Lighthouse",
    categories: ["Photography", "Design"],
    title: "Breathtaking Photos of Lighthouses.",
    excerpt: `Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
              incididunt mollit id et sit proident dolor nulla sed commodo
              est ad minim elit reprehenderit nisi officia aute incididunt
              velit sint in aliqua cillum in consequat consequat in culpa in
              anim.`,
  },
  {
    articleUrl: "single-standard.html",
    thumbnailUrl: "/images/thumbs/liberty.jpg",
    thumbnailAlt: "Lighthouse",
    categories: ["Branding", "html"],
    title: "Designing With Black and White.",
    excerpt: `Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
              incididunt mollit id et sit proident dolor nulla sed commodo
              est ad minim elit reprehenderit nisi officia aute incididunt
              velit sint in aliqua cillum in consequat consequat in culpa in
              anim.`,
  },
];

const audioPosts: AudioPostModel[] = [
  {
    articleUrl: "single-audio.html",
    thumbnailUrl: "/images/thumbs/concert.jpg",
    thumbnailAlt: "concert",
    categories: ["Design", "Music"],
    title: "This Is a Audio Format Post.",
    excerpt: `Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
              incididunt mollit id et sit proident dolor nulla sed commodo
              est ad minim elit reprehenderit nisi officia aute incididunt
              velit sint in aliqua cillum in consequat consequat in culpa in
              anim.`,
    audioSourceUrl: "media/AirReview-Landmarks-02-ChasingCorporate.mp3",
  },
];

const quotePosts: QuotePostModel[] = [
  {
    quote: `Good design is making something intelligible and memorable. 
            Great design is making something memorable and meaningful.`,
    cite: "Dieter Rams",
  },
];

export const gridPostSlides: GridPostSlideModel[] = [
  {
    backgroundUrl: "/images/thumbs/featured/featured-1.jpg",
    author: "Naruto Uzumaki",
    publishedDate: "September 06, 2016",
    title: "Minimalism Never Goes Out of Style",
    articleUrl: "single-standard.html",
  },
  {
    backgroundUrl: "/images/thumbs/featured/featured-2.jpg",
    author: "Sasuke Uchiha",
    publishedDate: "August 29, 2016",
    title: "Enhancing Your Designs with Negative Space",
    articleUrl: "single-standard.html",
  },
  {
    backgroundUrl: "/images/thumbs/featured/featured-3.jpg",
    author: "Naruto Uzumaki",
    publishedDate: "August 27, 2016",
    title: "Music Album Cover Designs for Inspiration",
    articleUrl: "single-standard.html",
  },
];

export const videoPosts: VideoPostModel[] = [
  {
    articleUrl: "single-video.html",
    thumbnailUrl: "/images/thumbs/ottawa-bokeh.jpg",
    thumbnailAlt: "bokeh",
    categories: ["Design", "Branding"],
    title: "This Is a Video Post Format.",
    excerpt: `Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua,
        incididunt mollit id et sit proident dolor nulla sed commodo,
        est ad minim elit reprehenderit nisi officia aute incididunt,
        velit sint in aliqua cillum in consequat consequat in culpa in,
        anim.`,
    videoSourceUrl:
      "http://player.vimeo.com/video/14592941?title=0&amp;byline=0&amp;portrait=0&amp;color=F64B39",
  },
];

const posts: PostModel[] = [
  ...standardPosts,
  ...audioPosts,
  ...quotePosts,
  ...videoPosts,
];

export function getPosts({
  category = "",
  pageNumber = 0,
  pageSize = 10,
}: {
  category?: string;
  pageNumber?: number;
  pageSize?: number;
} = {}): PostModel[] {
  let posts: PostModel[] = [
    ...standardPosts,
    ...audioPosts,
    ...quotePosts,
    ...videoPosts,
  ];

  // Filter posts by category
  if (category.length > 0) {
    posts = posts.filter((post) => {
      return (
        "categories" in post &&
        post.categories
          .map((category) => category.toLowerCase())
          .includes(category.toLowerCase())
      );
    });
  }

  // Paginate postss
  const startSliceIndex = pageSize * pageNumber;
  const endSliceIndex = startSliceIndex + pageSize;
  posts = posts.slice(startSliceIndex, endSliceIndex);

  // Shuffle posts
  posts.sort(() => Math.random() - 0.5);
  return posts;
}

export function paginatePosts({
  category = "",
  pageNumber = 0,
  pageSize = 10,
}: {
  category?: string;
  pageNumber?: number;
  pageSize?: number;
} = {}): PostsPaginationModel {
  let posts: PostModel[] = [
    ...standardPosts,
    ...audioPosts,
    ...quotePosts,
    ...videoPosts,
  ];

  // Filter posts by category
  if (category.length > 0) {
    posts = posts.filter((post) => {
      return (
        "categories" in post &&
        post.categories
          .map((category) => category.toLowerCase())
          .includes(category.toLowerCase())
      );
    });
  }

  const totalItems = posts.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  // Paginate postss
  const startSliceIndex = pageNumber * pageSize;
  const endSliceIndex = startSliceIndex + pageSize;
  posts = posts.slice(startSliceIndex, endSliceIndex);

  // Shuffle posts
  posts.sort(() => Math.random() - 0.5);

  const paginatedPosts: PostsPaginationModel = {
    items: posts,
    totalItems,
    hasNext: totalPages > pageNumber + 1,
    totalPages,
  };

  return paginatedPosts;
}
