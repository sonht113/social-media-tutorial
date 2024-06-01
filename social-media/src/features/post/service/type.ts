export type PostTypeRes = {
  id?: string;
  author: {
    fullname: string;
    avatar: string;
    id: string;
  };
  topic: {
    image: string;
    name: string;
    color: string;
    id: string;
  };
  content: string;
  images?: string[];
  video?: string[];
  isGhim?: boolean;
  usersLiked?: { fullname: string; id: string; avatar: string }[] | undefined;
  authorsPostShared?: string[];
  statusPostToGroup?: boolean;
  verified?: boolean;
  idGroup?: string;
  createdAt?: Date;
  quantityComments?: number;
  updatedAt?: Date;
  isPostToGroup?: {
    idGroup: string;
    status: boolean;
    verified: boolean;
  };
};

export type PostType = {
  idPost?: string | undefined;
  images?: string[];
  content?: string;
  typePost?: 'video' | 'content';
  videoSrc?: string;
  fullname: string;
  avatar?: string;
  createdAt: Date;
  quantityComments?: number;
  usersLiked?: { fullname: string; id: string; avatar: string }[] | undefined;
  topic?: {
    image: string;
    name: string;
    color: string;
    id: string;
  };
  idAuthor?: string;
  isPostToGroup?: {
    idGroup: string;
    status: boolean;
    verified: boolean;
  };

  refetch?: () => void;
};

export type PostInput = Pick<
  PostTypeRes,
  'content' | 'images' | 'video' | 'createdAt'
> & {
  topic: string;
  idGroup?: string;
};

export type ResPaginationPostData = {
  data: PostTypeRes[];
  page: number;
  limit: number;
};
