export type StandardPostModel = {
  articleUrl: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  categories: string[];
  title: string;
  excerpt: string;
};

export type AudioPostModel = {
  audioSourceUrl: string;
  articleUrl: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  categories: string[];
  title: string;
  excerpt: string;
};

export type QuotePostModel = {
  quote: string;
  cite: string;
};

export type GridPostSlideModel = {
  backgroundUrl: string;
  author: string;
  publishedDate: string;
  title: string;
  articleUrl: string;
};

export type GalleryPostModel = {
  imageUrls: string[];
  categories: string[];
  title: string;
  excerpt: string;
  articleUrl: string;
};

export type LinkPostModel = {
  summary: string;
  link: string;
  linkText: string;
};

export type VideoPostModel = {
  videoSourceUrl: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  title: string;
  excerpt: string;
  categories: string[];
  articleUrl: string;
};

export type PostModel =
  | StandardPostModel
  | AudioPostModel
  | QuotePostModel
  // | GridPostSlideModel
  | GalleryPostModel
  | LinkPostModel
  | VideoPostModel;
