import { PostType } from '@/features/post/service/type';

export type CollectionType = {
  createdAt: Date;
  id: string;
  markets?: string[];
  name: string;
  posts: PostType[];
  saved?: string;
  updatedAt: Date;
  avatar?: string;
};

export type CollectionInputType = Pick<
  CollectionType,
  'name' | 'saved' | 'avatar'
>;

export type CollectionUpdateInputType = Pick<
  CollectionType,
  'id' | 'name' | 'avatar'
>;

export type SavedType = {
  id: string;
  markets: string[];
  posts: PostType[];
};

export type ResPaginationCollectionData = {
  data: CollectionType[];
  total: number;
  page: number;
};
