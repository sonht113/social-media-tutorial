// eslint-disable-next-line no-restricted-imports
import { EnumActive } from '@/ts/enums/common';

export type UserType = {
  address?: string;
  avatar?: string;
  company?: string;
  coverImage?: string;
  createdAt?: Date;
  dayOfBirth?: string;
  description?: string;
  email?: string;
  files?: string[];
  friends?: UserType[];
  friendsReq?: UserType[];
  fullname?: string;
  gender?: number;
  id: string;
  password: string;
  phone?: string;
  relationship?: number;
  role?: string;
  university?: string;
  updatedAt?: Date;
  username?: string;
  isActive: EnumActive;
  usersBlocked: string[];
};

export type ResAllUserPagination = {
  data: UserType[];
  total: number;
  page: number;
};
