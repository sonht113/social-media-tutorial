import { UserType } from '@/features/user';

export type ProductType = {
  author?: UserType;
  category?: number;
  createdAt?: Date;
  description?: string;
  id?: string;
  images?: string[];
  location?: string;
  videos?: string[];
  name?: string;
  price?: number;
  updatedAt?: Date;
  refetch?: () => void;
  onClose?: () => void;
};

export type InputProductType = Pick<
  ProductType,
  | 'name'
  | 'description'
  | 'price'
  | 'category'
  | 'location'
  | 'images'
  | 'videos'
>;

export type ResPaginationProductData = {
  page: number;
  total: number;
  data: ProductType[];
};

export type CategoryType = {
  id: number;
  name: string;
  rank: number;
};
