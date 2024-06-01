import { UserType } from '@/features/user';

export type ListFriendType = {
  friends: UserType[];
  friendsReq: UserType[];
};

export type CreateFriendType = {
  friends: string[];
  friendsReq: string[];
};
