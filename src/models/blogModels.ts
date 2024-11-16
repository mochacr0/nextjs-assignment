export interface BaseBlogModel {
  id: string;
  slug: string;
  title: string;
  content: BlogContentModel;
  type: BlogType;
  headerMedia: HeaderMedia;
}

export interface StandardBlogModel extends BaseBlogModel {
  type: BlogType.STANDARD;
  headerMedia: StandardHeaderMedia;
}

export interface GalleryBlogModel extends BaseBlogModel {
  type: BlogType.GALLERY;
  headerMedia: GalleryHeaderMedia;
}

export interface AudioBlogModel extends BaseBlogModel {
  type: BlogType.AUDIO;
  headerMedia: AudioHeaderMedia;
}

export interface VideoBlogModel extends BaseBlogModel {
  type: BlogType.VIDEO;
  headerMedia: VideoHeaderMedia;
}

export type BlogModel =
  | StandardBlogModel
  | GalleryBlogModel
  | AudioBlogModel
  | VideoBlogModel;

type HeaderMedia =
  | StandardHeaderMedia
  | GalleryHeaderMedia
  | AudioHeaderMedia
  | VideoHeaderMedia;

export interface StandardHeaderMedia {
  thumbnailUrl: string;
  thumbnailAlt?: string;
}

export type GalleryHeaderMedia = {
  slideUrls: string[];
};

export type AudioHeaderMedia = {
  thumbnailUrl: string;
  thumbnailAlt?: string;
  audioSourceUrl: string;
};

export type VideoHeaderMedia = {
  videoSourceUrl: string;
};

export type BlogContentModel = {
  meta: BlogMetaModel;
  tags: string[];
  author: BlogAuthorModel;
  body: string;
};

export type BlogAuthorModel = {
  name: string;
  avatarUrl: string;
  avatarAlt?: string;
  about: string;
  socialLinks?: BlogAuthorSocialLinkModel[];
};

type BlogAuthorSocialLinkModel = {
  platform: string;
  url: string;
};

export enum BlogType {
  STANDARD = "standard",
  GALLERY = "gallery",
  LINK = "link",
  QUOTE = "quote",
  VIDEO = "video",
  AUDIO = "audio",
  OTHER = "other",
}

export type BlogMetaModel = {
  title: string;
  publishedDate: string;
  categories: string[];
};
