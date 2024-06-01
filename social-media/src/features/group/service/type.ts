import { UserType } from '@/features/user';

export interface GroupType {
  admins?: UserType[];
  allFiles?: string[];
  author?: UserType;
  avatar?: string;
  coverImage?: string;
  createAt?: Date;
  description?: string;
  id?: string;
  members?: UserType[];
  membersReq?: UserType[];
  name?: string;
  updatedAt?: Date;
  isPrivate?: boolean;
}

export type GroupUpdateType = Omit<
  GroupType,
  'createAt' | 'id' | 'updatedAt' | 'members' | 'membersReq'
>;

export type GroupInput = Pick<
  GroupType,
  'name' | 'avatar' | 'coverImage' | 'description' | 'isPrivate'
>;

export type ResPaginationGroupData = {
  data: GroupType[];
  page: number;
  total: number;
};
