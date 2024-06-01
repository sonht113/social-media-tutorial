import { useQueryInfoUser } from '@/features/auth';

export const LIMIT = 10;
export const PAGE = 1;
export const FILTER = {};

const user = () => {
  const { data: userData } = useQueryInfoUser();
  let result = '';
  result = userData?.getInfoUser.id as string;
  return result;
};

export const ID_USER = user;
