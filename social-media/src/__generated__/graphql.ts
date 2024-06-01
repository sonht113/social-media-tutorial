/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  rank: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CollectionDto = {
  __typename?: 'CollectionDto';
  avatar: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  markets: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  posts: Array<Post>;
  saved: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Comment = {
  __typename?: 'Comment';
  author: User;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  images: Array<Scalars['String']['output']>;
  likes: Array<User>;
  postId: Scalars['String']['output'];
  replies: Array<Comment>;
  updatedAt: Scalars['DateTime']['output'];
  videos: Array<Scalars['String']['output']>;
};

export type CreateCategoryDto = {
  createdAt?: Scalars['DateTime']['input'];
  name: Scalars['String']['input'];
  rank: Scalars['Float']['input'];
  updatedAt?: Scalars['DateTime']['input'];
};

export type CreateCollectionDto = {
  avatar: Scalars['String']['input'];
  createdAt?: Scalars['DateTime']['input'];
  markets?: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  posts?: Array<Scalars['String']['input']>;
  saved: Scalars['String']['input'];
  updatedAt?: Scalars['DateTime']['input'];
};

export type CreateCommentDto = {
  content?: Scalars['String']['input'];
  createdAt?: Scalars['DateTime']['input'];
  images?: Array<Scalars['String']['input']>;
  likes?: Array<Scalars['String']['input']>;
  postId: Scalars['String']['input'];
  replies?: Array<Scalars['String']['input']>;
  updatedAt?: Scalars['DateTime']['input'];
  videos?: Array<Scalars['String']['input']>;
};

export type CreateGroupDto = {
  admins?: Array<Scalars['String']['input']>;
  allFiles?: Array<Scalars['String']['input']>;
  author?: Scalars['String']['input'];
  avatar: Scalars['String']['input'];
  coverImage: Scalars['String']['input'];
  createdAt?: Scalars['DateTime']['input'];
  description?: Scalars['String']['input'];
  isPrivate?: Scalars['Boolean']['input'];
  members?: Array<Scalars['String']['input']>;
  membersReq?: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: Scalars['DateTime']['input'];
};

export type CreateMarketDto = {
  category: Scalars['Float']['input'];
  createdAt?: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  images?: Array<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['String']['input'];
  updatedAt?: Scalars['DateTime']['input'];
  videos?: Array<Scalars['String']['input']>;
};

export type CreateMessageDto = {
  author: Scalars['String']['input'];
  content: Scalars['String']['input'];
  createdAt?: Scalars['DateTime']['input'];
  room: Scalars['String']['input'];
  typeMessage?: Scalars['String']['input'];
  updatedAt?: Scalars['DateTime']['input'];
};

export type CreatePostDto = {
  authorsPostShared?: Array<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  createdAt?: Scalars['DateTime']['input'];
  idGroup?: Scalars['String']['input'];
  images?: Array<Scalars['String']['input']>;
  isGhim?: Scalars['Boolean']['input'];
  quantityComments?: Scalars['Float']['input'];
  statusPostToGroup?: Scalars['Boolean']['input'];
  topic: Scalars['ID']['input'];
  updatedAt?: Scalars['DateTime']['input'];
  usersLiked?: Array<Scalars['String']['input']>;
  verified?: Scalars['Boolean']['input'];
  video?: Array<Scalars['String']['input']>;
};

export type CreateRoomDto = {
  createdAt?: Scalars['DateTime']['input'];
  members: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: Scalars['DateTime']['input'];
};

export type CreateSavedDto = {
  author: Scalars['String']['input'];
  createdAt?: Scalars['DateTime']['input'];
  markets?: Array<Scalars['String']['input']>;
  posts?: Array<Scalars['String']['input']>;
  updatedAt?: Scalars['DateTime']['input'];
};

export type CreateTopicDto = {
  color: Scalars['String']['input'];
  createdAt?: Scalars['DateTime']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  rank?: Scalars['Float']['input'];
  updatedAt?: Scalars['DateTime']['input'];
};

export type CreateUserDto = {
  address?: Scalars['String']['input'];
  avatar?: Scalars['String']['input'];
  company?: Scalars['String']['input'];
  coverImage?: Scalars['String']['input'];
  createdAt?: Scalars['DateTime']['input'];
  dayOfBirth?: Scalars['String']['input'];
  description?: Scalars['String']['input'];
  email: Scalars['String']['input'];
  files?: Array<Scalars['String']['input']>;
  fullname: Scalars['String']['input'];
  gender?: Scalars['Float']['input'];
  isActive?: Scalars['Float']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  relationship?: Scalars['Float']['input'];
  role?: Scalars['String']['input'];
  university?: Scalars['String']['input'];
  updatedAt?: Scalars['DateTime']['input'];
  username: Scalars['String']['input'];
  usersBlocked?: Array<Scalars['String']['input']>;
};

export type Friend = {
  __typename?: 'Friend';
  author: User;
  createdAt: Scalars['DateTime']['output'];
  friends: Array<User>;
  friendsReq: Array<User>;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Group = {
  __typename?: 'Group';
  admins: Array<User>;
  allFiles: Array<Scalars['String']['output']>;
  author: User;
  avatar: Scalars['String']['output'];
  coverImage: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isPrivate: Scalars['Boolean']['output'];
  members: Array<User>;
  membersReq: Array<User>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type IsPostToGroupDto = {
  __typename?: 'IsPostToGroupDto';
  idGroup: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  verified: Scalars['Boolean']['output'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String']['output'];
  expiresIn: Scalars['String']['output'];
  user: User;
};

export type LoginUserDto = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Market = {
  __typename?: 'Market';
  author: User;
  category: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  images: Array<Scalars['String']['output']>;
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  videos: Array<Scalars['String']['output']>;
};

export type Message = {
  __typename?: 'Message';
  author: User;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  room: Scalars['String']['output'];
  typeMessage: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptFriendReq: ResponseDto;
  acceptMemberReqJoinGroup: ResponseDto;
  activeUser: ResponseDto;
  blockUser: ResponseDto;
  create: ResponseUserDto;
  createCategory: Category;
  createCollection: CollectionDto;
  createComment: Comment;
  createGroup: Group;
  createMessage: Message;
  createPost: Post;
  createProduct: Market;
  createRoom: Room;
  createSaved: Saved;
  createTopic: Topic;
  delete: ResponseDto;
  deleteCollection: ResponseDto;
  deleteComment: Comment;
  deleteFriend: ResponseDto;
  deleteGroup: ResponseDto;
  deleteMarketCollection: ResponseDto;
  deleteMarketSaved: ResponseDto;
  deleteMessage: ResponseDto;
  deletePost: ResponseDto;
  deletePostCollection: ResponseDto;
  deletePostSaved: ResponseDto;
  deleteProduct: Market;
  deleteRoom: ResponseDto;
  deleteTopic: ResponseDto;
  ghimPost: ResponseDto;
  inActiveUser: ResponseDto;
  joinGroup: ResponseDto;
  leaveGroup: ResponseDto;
  likePost: ResponseDto;
  login: LoginResponse;
  rejectReqFriend: ResponseDto;
  replyComment: ResponseDto;
  requestAddFriend: ResponseDto;
  sharePost: ResponseDto;
  signup: User;
  unBlockUser: ResponseDto;
  updatFileForUser: ResponseDto;
  update: ResponseDto;
  updateCollection: ResponseDto;
  updateComment: Comment;
  updateGroup: ResponseDto;
  updateMarketCollection: ResponseDto;
  updateMarketSaved: ResponseDto;
  updateMessage: Message;
  updatePost: ResponseDto;
  updatePostCollection: ResponseDto;
  updatePostSaved: ResponseDto;
  updateProduct: Market;
  updateRoom: ResponseDto;
  updateTopic: ResponseDto;
  uploadMultipleFiles: Array<ResponseSingleUpload>;
  uploadSingleFiles: ResponseSingleUpload;
};


export type MutationAcceptFriendReqArgs = {
  friendId: Scalars['String']['input'];
};


export type MutationAcceptMemberReqJoinGroupArgs = {
  idGroup: Scalars['String']['input'];
  idMemberReq: Scalars['String']['input'];
};


export type MutationActiveUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationBlockUserArgs = {
  idUserBlocked: Scalars['String']['input'];
};


export type MutationCreateArgs = {
  body: CreateUserDto;
};


export type MutationCreateCategoryArgs = {
  body: CreateCategoryDto;
};


export type MutationCreateCollectionArgs = {
  body: CreateCollectionDto;
};


export type MutationCreateCommentArgs = {
  body: CreateCommentDto;
};


export type MutationCreateGroupArgs = {
  body: CreateGroupDto;
};


export type MutationCreateMessageArgs = {
  body: CreateMessageDto;
};


export type MutationCreatePostArgs = {
  body: CreatePostDto;
};


export type MutationCreateProductArgs = {
  body: CreateMarketDto;
};


export type MutationCreateRoomArgs = {
  body: CreateRoomDto;
};


export type MutationCreateSavedArgs = {
  body: CreateSavedDto;
};


export type MutationCreateTopicArgs = {
  body: CreateTopicDto;
};


export type MutationDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCollectionArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['String']['input'];
  idCmtParent: Scalars['String']['input'];
};


export type MutationDeleteFriendArgs = {
  friendId: Scalars['String']['input'];
};


export type MutationDeleteGroupArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMarketCollectionArgs = {
  id: Scalars['String']['input'];
  idMarket: Scalars['String']['input'];
};


export type MutationDeleteMarketSavedArgs = {
  idMarket: Scalars['String']['input'];
  idSaved: Scalars['String']['input'];
};


export type MutationDeleteMessageArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePostCollectionArgs = {
  id: Scalars['String']['input'];
  idPost: Scalars['String']['input'];
};


export type MutationDeletePostSavedArgs = {
  idPost: Scalars['String']['input'];
  idSaved: Scalars['String']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteRoomArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTopicArgs = {
  id: Scalars['String']['input'];
};


export type MutationGhimPostArgs = {
  idPost: Scalars['String']['input'];
};


export type MutationInActiveUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationJoinGroupArgs = {
  id: Scalars['String']['input'];
};


export type MutationLeaveGroupArgs = {
  id: Scalars['String']['input'];
};


export type MutationLikePostArgs = {
  idPost: Scalars['String']['input'];
  idUser: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  body: LoginUserDto;
};


export type MutationRejectReqFriendArgs = {
  friendId: Scalars['String']['input'];
};


export type MutationReplyCommentArgs = {
  body: CreateCommentDto;
  idCmtParent: Scalars['String']['input'];
};


export type MutationRequestAddFriendArgs = {
  friendId: Scalars['String']['input'];
};


export type MutationSharePostArgs = {
  idPost: Scalars['String']['input'];
  idUser: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  body: SignUpUserDto;
};


export type MutationUnBlockUserArgs = {
  idUserBlocked: Scalars['String']['input'];
};


export type MutationUpdatFileForUserArgs = {
  files: Array<Scalars['String']['input']>;
};


export type MutationUpdateArgs = {
  body: UpdateUserDto;
  id: Scalars['String']['input'];
};


export type MutationUpdateCollectionArgs = {
  body: UpdateCollectionDto;
  id: Scalars['String']['input'];
};


export type MutationUpdateCommentArgs = {
  body: CreateCommentDto;
  id: Scalars['String']['input'];
};


export type MutationUpdateGroupArgs = {
  body: UpdateGroupDto;
  id: Scalars['String']['input'];
};


export type MutationUpdateMarketCollectionArgs = {
  id: Scalars['String']['input'];
  idMarket: Scalars['String']['input'];
};


export type MutationUpdateMarketSavedArgs = {
  idMarket: Scalars['String']['input'];
  idSaved: Scalars['String']['input'];
};


export type MutationUpdateMessageArgs = {
  body: UpdateMessageDto;
  id: Scalars['String']['input'];
};


export type MutationUpdatePostArgs = {
  body: UpdatePostDto;
  id: Scalars['String']['input'];
};


export type MutationUpdatePostCollectionArgs = {
  id: Scalars['String']['input'];
  idPost: Scalars['String']['input'];
};


export type MutationUpdatePostSavedArgs = {
  idPost: Scalars['String']['input'];
  idSaved: Scalars['String']['input'];
};


export type MutationUpdateProductArgs = {
  body: CreateMarketDto;
  id: Scalars['String']['input'];
};


export type MutationUpdateRoomArgs = {
  body: UpdateRoomDto;
  id: Scalars['String']['input'];
};


export type MutationUpdateTopicArgs = {
  body: UpdateTopicDto;
  id: Scalars['String']['input'];
};


export type MutationUploadMultipleFilesArgs = {
  files: Array<Scalars['Upload']['input']>;
};


export type MutationUploadSingleFilesArgs = {
  file: Scalars['Upload']['input'];
};

export type PaginationCollectionDto = {
  __typename?: 'PaginationCollectionDto';
  data: Array<CollectionDto>;
  page: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
};

export type PaginationCommentDto = {
  __typename?: 'PaginationCommentDto';
  data: Array<Comment>;
  page: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
};

export type PaginationGroupDto = {
  __typename?: 'PaginationGroupDto';
  data: Array<Group>;
  page: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
};

export type PaginationMarketDto = {
  __typename?: 'PaginationMarketDto';
  data: Array<Market>;
  page: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
};

export type PaginationPostDto = {
  __typename?: 'PaginationPostDto';
  data: Array<Post>;
  page: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
};

export type PaginationUserDto = {
  __typename?: 'PaginationUserDto';
  data: Array<User>;
  page: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
};

export type ParamsQueryDto = {
  query?: InputMaybe<Scalars['String']['input']>;
};

export type Post = {
  __typename?: 'Post';
  author: User;
  authorsPostShared: Array<User>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  images: Array<Scalars['String']['output']>;
  isGhim: Scalars['Boolean']['output'];
  isPostToGroup: IsPostToGroupDto;
  quantityComments: Scalars['Float']['output'];
  topic: Topic;
  updatedAt: Scalars['DateTime']['output'];
  usersLiked: Array<User>;
  videos: Array<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  category: Category;
  getAllMessage: Array<Message>;
  getAllPost: PaginationPostDto;
  getAllRoom: Array<Room>;
  getCollections: PaginationCollectionDto;
  getComment: Comment;
  getComments: PaginationCommentDto;
  getFriends: Friend;
  getGroupById: Group;
  getGroups: PaginationGroupDto;
  getInfoUser: ResponseUserDto;
  getPostByAuthor: PaginationPostDto;
  getPostById: Post;
  getPostsByGroup: PaginationPostDto;
  getProductById: Market;
  getProducts: PaginationMarketDto;
  getProductsByUser: PaginationMarketDto;
  getQuantityUser: ResponseQuantityDto;
  getRoomById: Room;
  getSaved: Saved;
  getUserById: ResponseUserDto;
  topic: Topic;
  topics: Array<Topic>;
  user: ResponseDto;
  users: PaginationUserDto;
};


export type QueryCategoryArgs = {
  name: Scalars['String']['input'];
};


export type QueryGetAllMessageArgs = {
  room: Scalars['String']['input'];
};


export type QueryGetAllPostArgs = {
  filter: ParamsQueryDto;
  limit: Scalars['Float']['input'];
  page: Scalars['Float']['input'];
};


export type QueryGetAllRoomArgs = {
  idUser: Scalars['String']['input'];
};


export type QueryGetCollectionsArgs = {
  idSaved: Scalars['String']['input'];
  limit: Scalars['Float']['input'];
  page: Scalars['Float']['input'];
};


export type QueryGetCommentArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetCommentsArgs = {
  limit: Scalars['Float']['input'];
  page: Scalars['Float']['input'];
  postId: Scalars['String']['input'];
};


export type QueryGetGroupByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetGroupsArgs = {
  filter: ParamsQueryDto;
  limit: Scalars['Float']['input'];
  page: Scalars['Float']['input'];
};


export type QueryGetPostByAuthorArgs = {
  idAuthor: Scalars['String']['input'];
  limit: Scalars['Float']['input'];
  page: Scalars['Float']['input'];
};


export type QueryGetPostByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetPostsByGroupArgs = {
  idGroup: Scalars['String']['input'];
  limit: Scalars['Float']['input'];
  page: Scalars['Float']['input'];
};


export type QueryGetProductByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetProductsArgs = {
  filter: ParamsQueryDto;
  limit: Scalars['Float']['input'];
  page: Scalars['Float']['input'];
};


export type QueryGetProductsByUserArgs = {
  filter: ParamsQueryDto;
  limit: Scalars['Float']['input'];
  page: Scalars['Float']['input'];
};


export type QueryGetRoomByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryTopicArgs = {
  name: Scalars['String']['input'];
};


export type QueryUserArgs = {
  username: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  query: QueryPagination;
};

export type QueryPagination = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
};

export type ResponseDto = {
  __typename?: 'ResponseDto';
  message: Scalars['String']['output'];
  status: Scalars['Float']['output'];
};

export type ResponseQuantityDto = {
  __typename?: 'ResponseQuantityDto';
  quantity: Scalars['Float']['output'];
};

export type ResponseSingleUpload = {
  __typename?: 'ResponseSingleUpload';
  url: Scalars['String']['output'];
};

export type ResponseUserDto = {
  __typename?: 'ResponseUserDto';
  address: Scalars['String']['output'];
  avatar: Scalars['String']['output'];
  company: Scalars['String']['output'];
  coverImage: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  dayOfBirth: Scalars['String']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  files: Array<Scalars['String']['output']>;
  fullname: Scalars['String']['output'];
  gender: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Float']['output'];
  phone: Scalars['String']['output'];
  relationship: Scalars['Float']['output'];
  role: Scalars['String']['output'];
  university: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
  usersBlocked: Array<User>;
};

export type Room = {
  __typename?: 'Room';
  author: User;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  members: Array<User>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Saved = {
  __typename?: 'Saved';
  author: User;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  markets: Array<Scalars['String']['output']>;
  posts: Array<Post>;
  updatedAt: Scalars['DateTime']['output'];
};

export type SignUpUserDto = {
  address?: Scalars['String']['input'];
  avatar?: Scalars['String']['input'];
  company?: Scalars['String']['input'];
  coverImage?: Scalars['String']['input'];
  createdAt?: Scalars['DateTime']['input'];
  dayOfBirth?: Scalars['String']['input'];
  description?: Scalars['String']['input'];
  email: Scalars['String']['input'];
  files?: Array<Scalars['String']['input']>;
  fullname: Scalars['String']['input'];
  gender?: Scalars['Float']['input'];
  isActive?: Scalars['Float']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  relationship?: Scalars['Float']['input'];
  role?: Scalars['String']['input'];
  university?: Scalars['String']['input'];
  updatedAt?: Scalars['DateTime']['input'];
  username: Scalars['String']['input'];
  usersBlocked?: Array<Scalars['String']['input']>;
};

export type Topic = {
  __typename?: 'Topic';
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  rank: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdateCollectionDto = {
  avatar: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpdateGroupDto = {
  admins?: InputMaybe<Array<Scalars['String']['input']>>;
  allFiles?: InputMaybe<Array<Scalars['String']['input']>>;
  author?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  coverImage?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  members?: InputMaybe<Array<Scalars['String']['input']>>;
  membersReq?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: Scalars['DateTime']['input'];
};

export type UpdateMessageDto = {
  content: Scalars['String']['input'];
  updatedAt?: Scalars['DateTime']['input'];
};

export type UpdatePostDto = {
  authorsPostShared?: InputMaybe<Array<Scalars['String']['input']>>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  idGroup?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  isGhim?: InputMaybe<Scalars['Boolean']['input']>;
  quantityComments?: InputMaybe<Scalars['Float']['input']>;
  statusPostToGroup?: InputMaybe<Scalars['Boolean']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  usersLiked?: InputMaybe<Array<Scalars['String']['input']>>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  video?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateRoomDto = {
  members?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: Scalars['DateTime']['input'];
};

export type UpdateTopicDto = {
  color?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rank?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: Scalars['DateTime']['input'];
};

export type UpdateUserDto = {
  address?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  coverImage?: InputMaybe<Scalars['String']['input']>;
  dayOfBirth?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<Scalars['String']['input']>>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['Float']['input']>;
  isActive?: InputMaybe<Scalars['Float']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  relationship?: InputMaybe<Scalars['Float']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  university?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: Scalars['DateTime']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
  usersBlocked?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type User = {
  __typename?: 'User';
  address: Scalars['String']['output'];
  avatar: Scalars['String']['output'];
  company: Scalars['String']['output'];
  coverImage: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  dayOfBirth: Scalars['String']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  files: Array<Scalars['String']['output']>;
  fullname: Scalars['String']['output'];
  gender: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Float']['output'];
  password: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  relationship: Scalars['Float']['output'];
  role: Scalars['String']['output'];
  university: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
  usersBlocked: Array<User>;
};

export type LoginMutationVariables = Exact<{
  body: LoginUserDto;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', access_token: string, user: { __typename?: 'User', fullname: string, avatar: string, dayOfBirth: string, description: string, gender: number, id: string, phone: string, email: string, role: string, createdAt: any } } };

export type SignupMutationVariables = Exact<{
  body: SignUpUserDto;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'User', username: string } };

export type GetInfoUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetInfoUserQuery = { __typename?: 'Query', getInfoUser: { __typename?: 'ResponseUserDto', avatar: string, createdAt: any, coverImage: string, dayOfBirth: string, description: string, email: string, address: string, company: string, university: string, relationship: number, fullname: string, gender: number, id: string, phone: string } };

export type CreateCollectionMutationVariables = Exact<{
  body: CreateCollectionDto;
}>;


export type CreateCollectionMutation = { __typename?: 'Mutation', createCollection: { __typename?: 'CollectionDto', id: string, name: string } };

export type GetSavedQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSavedQuery = { __typename?: 'Query', getSaved: { __typename?: 'Saved', id: string, markets: Array<string>, posts: Array<{ __typename?: 'Post', content: string, createdAt: any, id: string, images: Array<string>, updatedAt: any, videos: Array<string>, author: { __typename?: 'User', id: string, fullname: string, avatar: string }, authorsPostShared: Array<{ __typename?: 'User', id: string, fullname: string, avatar: string }>, topic: { __typename?: 'Topic', name: string }, usersLiked: Array<{ __typename?: 'User', id: string, fullname: string, avatar: string }> }> } };

export type GetCollectionsQueryVariables = Exact<{
  idSaved: Scalars['String']['input'];
  limit: Scalars['Float']['input'];
  page: Scalars['Float']['input'];
}>;


export type GetCollectionsQuery = { __typename?: 'Query', getCollections: { __typename?: 'PaginationCollectionDto', page: number, total: number, data: Array<{ __typename?: 'CollectionDto', id: string, name: string, avatar: string }> } };

export type UpdateCollectionMutationVariables = Exact<{
  id: Scalars['String']['input'];
  body: UpdateCollectionDto;
}>;


export type UpdateCollectionMutation = { __typename?: 'Mutation', updateCollection: { __typename?: 'ResponseDto', status: number } };

export type DeleteCollectionMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteCollectionMutation = { __typename?: 'Mutation', deleteCollection: { __typename?: 'ResponseDto', status: number } };

export type CreateCommentMutationVariables = Exact<{
  body: CreateCommentDto;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'Comment', id: string } };

export type GetCommentsQueryVariables = Exact<{
  limit: Scalars['Float']['input'];
  page: Scalars['Float']['input'];
  postId: Scalars['String']['input'];
}>;


export type GetCommentsQuery = { __typename?: 'Query', getComments: { __typename?: 'PaginationCommentDto', page: number, total: number, data: Array<{ __typename?: 'Comment', postId: string, content: string, createdAt: any, id: string, images: Array<string>, videos: Array<string>, author: { __typename?: 'User', avatar: string, fullname: string, id: string }, replies: Array<{ __typename?: 'Comment', content: string, createdAt: any, id: string, author: { __typename?: 'User', avatar: string, fullname: string, id: string } }> }> } };

export type ReplyCommentMutationVariables = Exact<{
  body: CreateCommentDto;
  idCmtParent: Scalars['String']['input'];
}>;


export type ReplyCommentMutation = { __typename?: 'Mutation', replyComment: { __typename?: 'ResponseDto', message: string, status: number } };

export type GetFriendsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFriendsQuery = { __typename?: 'Query', getFriends: { __typename?: 'Friend', friends: Array<{ __typename?: 'User', id: string, fullname: string, avatar: string }>, friendsReq: Array<{ __typename?: 'User', id: string, fullname: string, avatar: string }> } };

export type CreateGroupMutationVariables = Exact<{
  body: CreateGroupDto;
}>;


export type CreateGroupMutation = { __typename?: 'Mutation', createGroup: { __typename?: 'Group', name: string, avatar: string, createdAt: any } };

export type GetGroupsQueryVariables = Exact<{
  filter: ParamsQueryDto;
  limit: Scalars['Float']['input'];
  page: Scalars['Float']['input'];
}>;


export type GetGroupsQuery = { __typename?: 'Query', getGroups: { __typename?: 'PaginationGroupDto', data: Array<{ __typename?: 'Group', name: string, id: string, avatar: string, description: string }> } };

export type GetGroupByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetGroupByIdQuery = { __typename?: 'Query', getGroupById: { __typename?: 'Group', allFiles: Array<string>, avatar: string, coverImage: string, createdAt: any, description: string, id: string, name: string, updatedAt: any, isPrivate: boolean, admins: Array<{ __typename?: 'User', fullname: string, id: string, avatar: string }>, members: Array<{ __typename?: 'User', fullname: string, id: string, avatar: string }>, membersReq: Array<{ __typename?: 'User', fullname: string, id: string, avatar: string }>, author: { __typename?: 'User', fullname: string, id: string, avatar: string } } };

export type JoinGroupMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type JoinGroupMutation = { __typename?: 'Mutation', joinGroup: { __typename?: 'ResponseDto', status: number, message: string } };

export type AcceptMemberReqJoinGroupMutationVariables = Exact<{
  idGroup: Scalars['String']['input'];
  idMemberReq: Scalars['String']['input'];
}>;


export type AcceptMemberReqJoinGroupMutation = { __typename?: 'Mutation', acceptMemberReqJoinGroup: { __typename?: 'ResponseDto', status: number, message: string } };

export type LeaveGroupMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type LeaveGroupMutation = { __typename?: 'Mutation', leaveGroup: { __typename?: 'ResponseDto', status: number, message: string } };

export type DeleteGroupMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteGroupMutation = { __typename?: 'Mutation', deleteGroup: { __typename?: 'ResponseDto', status: number, message: string } };

export type UpdateGroupMutationVariables = Exact<{
  id: Scalars['String']['input'];
  body: UpdateGroupDto;
}>;


export type UpdateGroupMutation = { __typename?: 'Mutation', updateGroup: { __typename?: 'ResponseDto', status: number, message: string } };

export type CreateProductMutationVariables = Exact<{
  body: CreateMarketDto;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Market', id: string } };

export type GetProductsQueryVariables = Exact<{
  filter: ParamsQueryDto;
  limit: Scalars['Float']['input'];
  page: Scalars['Float']['input'];
}>;


export type GetProductsQuery = { __typename?: 'Query', getProducts: { __typename?: 'PaginationMarketDto', page: number, total: number, data: Array<{ __typename?: 'Market', id: string, name: string, description: string, price: string, images: Array<string>, videos: Array<string>, location: string, createdAt: any, author: { __typename?: 'User', id: string, fullname: string, avatar: string } }> } };

export type GetProductByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetProductByIdQuery = { __typename?: 'Query', getProductById: { __typename?: 'Market', id: string, name: string, description: string, price: string, images: Array<string>, videos: Array<string>, location: string, createdAt: any, author: { __typename?: 'User', id: string, fullname: string, avatar: string } } };

export type GetProductsByUserQueryVariables = Exact<{
  filter: ParamsQueryDto;
  limit: Scalars['Float']['input'];
  page: Scalars['Float']['input'];
}>;


export type GetProductsByUserQuery = { __typename?: 'Query', getProductsByUser: { __typename?: 'PaginationMarketDto', page: number, total: number, data: Array<{ __typename?: 'Market', id: string, name: string, description: string, price: string, images: Array<string>, videos: Array<string>, location: string, createdAt: any, author: { __typename?: 'User', id: string, fullname: string, avatar: string } }> } };

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['String']['input'];
  body: CreateMarketDto;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct: { __typename?: 'Market', id: string } };

export type CreateRoomMutationVariables = Exact<{
  body: CreateRoomDto;
}>;


export type CreateRoomMutation = { __typename?: 'Mutation', createRoom: { __typename?: 'Room', id: string } };

export type GetAllPostQueryVariables = Exact<{
  filter: ParamsQueryDto;
  limit: Scalars['Float']['input'];
  page: Scalars['Float']['input'];
}>;


export type GetAllPostQuery = { __typename?: 'Query', getAllPost: { __typename?: 'PaginationPostDto', page: number, total: number, data: Array<{ __typename?: 'Post', id: string, content: string, images: Array<string>, createdAt: any, updatedAt: any, authorsPostShared: Array<{ __typename?: 'User', fullname: string, avatar: string, id: string }>, author: { __typename?: 'User', fullname: string, avatar: string, id: string }, topic: { __typename?: 'Topic', image: string, name: string, color: string, id: string }, usersLiked: Array<{ __typename?: 'User', fullname: string, avatar: string, id: string }> }> } };

export type GetPostByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetPostByIdQuery = { __typename?: 'Query', getPostById: { __typename?: 'Post', content: string, createdAt: any, id: string, updatedAt: any, images: Array<string>, isGhim: boolean, author: { __typename?: 'User', fullname: string, id: string, avatar: string }, isPostToGroup: { __typename?: 'IsPostToGroupDto', status: boolean, idGroup: string }, topic: { __typename?: 'Topic', name: string }, usersLiked: Array<{ __typename?: 'User', avatar: string, createdAt: any, dayOfBirth: string, description: string, email: string, fullname: string, gender: number, id: string, phone: string }>, authorsPostShared: Array<{ __typename?: 'User', avatar: string, createdAt: any, dayOfBirth: string, description: string, email: string, fullname: string, gender: number, id: string, phone: string }> } };

export type GetPostsByGroupQueryVariables = Exact<{
  idGroup: Scalars['String']['input'];
  limit: Scalars['Float']['input'];
  page: Scalars['Float']['input'];
}>;


export type GetPostsByGroupQuery = { __typename?: 'Query', getPostsByGroup: { __typename?: 'PaginationPostDto', page: number, total: number, data: Array<{ __typename?: 'Post', content: string, createdAt: any, id: string, images: Array<string>, isGhim: boolean, updatedAt: any, authorsPostShared: Array<{ __typename?: 'User', avatar: string, fullname: string, id: string }>, author: { __typename?: 'User', fullname: string, id: string, avatar: string }, isPostToGroup: { __typename?: 'IsPostToGroupDto', idGroup: string, status: boolean }, topic: { __typename?: 'Topic', id: string, name: string }, usersLiked: Array<{ __typename?: 'User', id: string, fullname: string }> }> } };

export type CreatePostMutationVariables = Exact<{
  body: CreatePostDto;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', content: string, createdAt: any, id: string, images: Array<string>, isGhim: boolean, updatedAt: any, usersLiked: Array<{ __typename?: 'User', fullname: string, avatar: string }>, authorsPostShared: Array<{ __typename?: 'User', fullname: string, avatar: string }> } };

export type LikePostMutationVariables = Exact<{
  idPost: Scalars['String']['input'];
  idUser: Scalars['String']['input'];
}>;


export type LikePostMutation = { __typename?: 'Mutation', likePost: { __typename?: 'ResponseDto', message: string, status: number } };

export type GetPostByAuthorQueryVariables = Exact<{
  idAuthor: Scalars['String']['input'];
  limit: Scalars['Float']['input'];
  page: Scalars['Float']['input'];
}>;


export type GetPostByAuthorQuery = { __typename?: 'Query', getPostByAuthor: { __typename?: 'PaginationPostDto', page: number, total: number, data: Array<{ __typename?: 'Post', id: string, content: string, images: Array<string>, createdAt: any, updatedAt: any, authorsPostShared: Array<{ __typename?: 'User', fullname: string, avatar: string, id: string }>, author: { __typename?: 'User', fullname: string, avatar: string, id: string }, topic: { __typename?: 'Topic', image: string, name: string, color: string, id: string }, usersLiked: Array<{ __typename?: 'User', fullname: string, avatar: string, id: string }> }> } };

export type DeletePostMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: { __typename?: 'ResponseDto', message: string, status: number } };

export type GhimPostMutationVariables = Exact<{
  idPost: Scalars['String']['input'];
}>;


export type GhimPostMutation = { __typename?: 'Mutation', ghimPost: { __typename?: 'ResponseDto', message: string, status: number } };

export type UpdatePostMutationVariables = Exact<{
  id: Scalars['String']['input'];
  body: UpdatePostDto;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'ResponseDto', status: number, message: string } };

export type SharePostMutationVariables = Exact<{
  idPost: Scalars['String']['input'];
  idUser: Scalars['String']['input'];
}>;


export type SharePostMutation = { __typename?: 'Mutation', sharePost: { __typename?: 'ResponseDto', status: number, message: string } };

export type UpdateMutationVariables = Exact<{
  body: UpdateUserDto;
  id: Scalars['String']['input'];
}>;


export type UpdateMutation = { __typename?: 'Mutation', update: { __typename?: 'ResponseDto', message: string, status: number } };

export type DeleteFriendMutationVariables = Exact<{
  friendId: Scalars['String']['input'];
}>;


export type DeleteFriendMutation = { __typename?: 'Mutation', deleteFriend: { __typename?: 'ResponseDto', status: number, message: string } };

export type RejectReqFriendMutationVariables = Exact<{
  friendId: Scalars['String']['input'];
}>;


export type RejectReqFriendMutation = { __typename?: 'Mutation', rejectReqFriend: { __typename?: 'ResponseDto', status: number, message: string } };

export type RequestAddFriendMutationVariables = Exact<{
  friendId: Scalars['String']['input'];
}>;


export type RequestAddFriendMutation = { __typename?: 'Mutation', requestAddFriend: { __typename?: 'ResponseDto', status: number, message: string } };

export type AcceptFriendReqMutationVariables = Exact<{
  friendId: Scalars['String']['input'];
}>;


export type AcceptFriendReqMutation = { __typename?: 'Mutation', acceptFriendReq: { __typename?: 'ResponseDto', status: number, message: string } };

export type GetTopicsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTopicsQuery = { __typename?: 'Query', topics: Array<{ __typename?: 'Topic', name: string, color: string, image: string, rank: number, id: string }> };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', getUserById: { __typename?: 'ResponseUserDto', id: string, phone: string, avatar: string, createdAt: any, coverImage: string, dayOfBirth: string, description: string, email: string, address: string, company: string, university: string, relationship: number, fullname: string, gender: number } };

export type UploadSingleFilesMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;


export type UploadSingleFilesMutation = { __typename?: 'Mutation', uploadSingleFiles: { __typename?: 'ResponseSingleUpload', url: string } };

export type UploadMultipleFilesMutationVariables = Exact<{
  files: Array<Scalars['Upload']['input']> | Scalars['Upload']['input'];
}>;


export type UploadMultipleFilesMutation = { __typename?: 'Mutation', uploadMultipleFiles: Array<{ __typename?: 'ResponseSingleUpload', url: string }> };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"dayOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"access_token"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const SignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Signup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpUserDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;
export const GetInfoUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInfoUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getInfoUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"}},{"kind":"Field","name":{"kind":"Name","value":"dayOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"university"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}}]}}]} as unknown as DocumentNode<GetInfoUserQuery, GetInfoUserQueryVariables>;
export const CreateCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCollectionDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateCollectionMutation, CreateCollectionMutationVariables>;
export const GetSavedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSaved"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSaved"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"markets"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorsPostShared"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"topic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"usersLiked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"videos"}}]}}]}}]}}]} as unknown as DocumentNode<GetSavedQuery, GetSavedQueryVariables>;
export const GetCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idSaved"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCollections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idSaved"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idSaved"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<GetCollectionsQuery, GetCollectionsQueryVariables>;
export const UpdateCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCollectionDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UpdateCollectionMutation, UpdateCollectionMutationVariables>;
export const DeleteCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<DeleteCollectionMutation, DeleteCollectionMutationVariables>;
export const CreateCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCommentDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateCommentMutation, CreateCommentMutationVariables>;
export const GetCommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetComments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getComments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"videos"}},{"kind":"Field","name":{"kind":"Name","value":"replies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCommentsQuery, GetCommentsQueryVariables>;
export const ReplyCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ReplyComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCommentDto"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idCmtParent"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"replyComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}},{"kind":"Argument","name":{"kind":"Name","value":"idCmtParent"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idCmtParent"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<ReplyCommentMutation, ReplyCommentMutationVariables>;
export const GetFriendsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFriends"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFriends"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"friends"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"friendsReq"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<GetFriendsQuery, GetFriendsQueryVariables>;
export const CreateGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateGroupDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<CreateGroupMutation, CreateGroupMutationVariables>;
export const GetGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGroups"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ParamsQueryDto"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getGroups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<GetGroupsQuery, GetGroupsQueryVariables>;
export const GetGroupByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGroupById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getGroupById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allFiles"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"admins"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"membersReq"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<GetGroupByIdQuery, GetGroupByIdQueryVariables>;
export const JoinGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"JoinGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"joinGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<JoinGroupMutation, JoinGroupMutationVariables>;
export const AcceptMemberReqJoinGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AcceptMemberReqJoinGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idGroup"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idMemberReq"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acceptMemberReqJoinGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idGroup"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idGroup"}}},{"kind":"Argument","name":{"kind":"Name","value":"idMemberReq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idMemberReq"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<AcceptMemberReqJoinGroupMutation, AcceptMemberReqJoinGroupMutationVariables>;
export const LeaveGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LeaveGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leaveGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<LeaveGroupMutation, LeaveGroupMutationVariables>;
export const DeleteGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteGroupMutation, DeleteGroupMutationVariables>;
export const UpdateGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateGroupDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<UpdateGroupMutation, UpdateGroupMutationVariables>;
export const CreateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMarketDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateProductMutation, CreateProductMutationVariables>;
export const GetProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ParamsQueryDto"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"videos"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductsQuery, GetProductsQueryVariables>;
export const GetProductByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProductById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"videos"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetProductByIdQuery, GetProductByIdQueryVariables>;
export const GetProductsByUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductsByUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ParamsQueryDto"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProductsByUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"videos"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductsByUserQuery, GetProductsByUserQueryVariables>;
export const UpdateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMarketDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateProductMutation, UpdateProductMutationVariables>;
export const CreateRoomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRoom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateRoomDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRoom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateRoomMutation, CreateRoomMutationVariables>;
export const GetAllPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ParamsQueryDto"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorsPostShared"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"topic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"usersLiked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllPostQuery, GetAllPostQueryVariables>;
export const GetPostByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPostById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"isGhim"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isPostToGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"idGroup"}}]}},{"kind":"Field","name":{"kind":"Name","value":"topic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"usersLiked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dayOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorsPostShared"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dayOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}}]}}]}}]} as unknown as DocumentNode<GetPostByIdQuery, GetPostByIdQueryVariables>;
export const GetPostsByGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostsByGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idGroup"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPostsByGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idGroup"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idGroup"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorsPostShared"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"isGhim"}},{"kind":"Field","name":{"kind":"Name","value":"isPostToGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"idGroup"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"topic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"usersLiked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPostsByGroupQuery, GetPostsByGroupQueryVariables>;
export const CreatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePostDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"isGhim"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"usersLiked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorsPostShared"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<CreatePostMutation, CreatePostMutationVariables>;
export const LikePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"likePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idPost"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idUser"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idPost"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idPost"}}},{"kind":"Argument","name":{"kind":"Name","value":"idUser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idUser"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<LikePostMutation, LikePostMutationVariables>;
export const GetPostByAuthorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostByAuthor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idAuthor"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPostByAuthor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idAuthor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idAuthor"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorsPostShared"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"topic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"usersLiked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPostByAuthorQuery, GetPostByAuthorQueryVariables>;
export const DeletePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deletePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<DeletePostMutation, DeletePostMutationVariables>;
export const GhimPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ghimPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idPost"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ghimPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idPost"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idPost"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GhimPostMutation, GhimPostMutationVariables>;
export const UpdatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePostDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<UpdatePostMutation, UpdatePostMutationVariables>;
export const SharePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"sharePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idPost"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idUser"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sharePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idPost"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idPost"}}},{"kind":"Argument","name":{"kind":"Name","value":"idUser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idUser"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<SharePostMutation, SharePostMutationVariables>;
export const UpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Update"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserDto"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UpdateMutation, UpdateMutationVariables>;
export const DeleteFriendDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteFriend"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFriend"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"friendId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteFriendMutation, DeleteFriendMutationVariables>;
export const RejectReqFriendDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"rejectReqFriend"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rejectReqFriend"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"friendId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<RejectReqFriendMutation, RejectReqFriendMutationVariables>;
export const RequestAddFriendDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"requestAddFriend"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestAddFriend"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"friendId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<RequestAddFriendMutation, RequestAddFriendMutationVariables>;
export const AcceptFriendReqDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"acceptFriendReq"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acceptFriendReq"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"friendId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<AcceptFriendReqMutation, AcceptFriendReqMutationVariables>;
export const GetTopicsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTopics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetTopicsQuery, GetTopicsQueryVariables>;
export const GetUserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"}},{"kind":"Field","name":{"kind":"Name","value":"dayOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"university"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}}]}}]}}]} as unknown as DocumentNode<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const UploadSingleFilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UploadSingleFiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadSingleFiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<UploadSingleFilesMutation, UploadSingleFilesMutationVariables>;
export const UploadMultipleFilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UploadMultipleFiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"files"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadMultipleFiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"files"},"value":{"kind":"Variable","name":{"kind":"Name","value":"files"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<UploadMultipleFilesMutation, UploadMultipleFilesMutationVariables>;