import { PostModel } from "./postModels";

export interface PaginationModel<T> {
  items: T[];
  totalItems: number;
  totalPages: number;
  hasNext: boolean;
}

export type PostsPaginationModel = PaginationModel<PostModel>;
