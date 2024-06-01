import { UserType } from '@/features/user';

export type RoomType = {
  author: UserType;
  createdAt: Date;
  id: string;
  members: UserType[];
  name: string;
  updatedAt: Date;
};

export type RoomCreateType = Pick<RoomType, 'name' | 'members'>;

export type MessageType = {
  author: UserType;
  content: string;
  createdAt: Date;
  id: string;
  typeMessage: string;
  room: string;
  updatedAt: Date;
};

export type MessageInputType = Exclude<
  MessageType,
  'id' | 'createdAt' | 'updatedAt'
>;
