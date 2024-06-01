import { UserType } from '@/features/user';

export type CommentType = {
  author?: UserType;
  content?: string;
  createdAt?: Date;
  id?: string;
  images?: string[];
  likes?: UserType[];
  postId?: string;
  replies?: CommentType[];
  updatedAt?: Date;
  videos?: string[];
  refetch: () => void;
};

export type CommentInputType = {
  content: string;
  postId: string;
  images: string[];
  videos: string[];
};

export type RepCommentInputType = {
  body: CommentInputType;
  idCmtParent: string;
};

export type ResPaginationCommentData = {
  page: number;
  total: number;
  data: CommentType[];
};
