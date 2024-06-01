import { Box, Divider, Text } from '@chakra-ui/react';

import { SideBarButton } from '@/components';
import { categoriesItem, marketSidebarItem } from '../service/constant';
import CreateProduct from './create-product';
import { useQueryCategories } from '../hooks/use-category-query';
import { useMemo } from 'react';
import { CategoryType } from '../service/type';

type Props = {
  refetch?: () => void;
};

export const CartSideBar = ({ refetch }: Props) => {
  const { data: categories } = useQueryCategories();

  const allCategories = useMemo(() => {
    if (categories) {
      return categories.categories.map((item: CategoryType) => ({
        ...item,
        icon: categoriesItem[item.rank - 1].icon,
      }));
    }
    return [];
  }, [categories]);

  return (
    <Box>
      <Text className="font-bold" fontSize="2xl">
        Marketplace
      </Text>
      <Divider className="my-4" />
      <Box className="flex flex-col">
        {marketSidebarItem.map((item) => (
          <SideBarButton
            key={item.name}
            buttonIcon={item.icon}
            buttonName={item.name}
          />
        ))}
      </Box>
      <CreateProduct refetch={refetch} />
      <Divider className="my-4" />
      <Text className="uppercase my-4 text-violet-800 font-bold" fontSize="sm">
        Filter
      </Text>
      <Text className="font-bold cursor-pointer">Danang . 20km</Text>
      <Divider className="my-4" />
      <Text className="uppercase my-4 text-violet-800 font-bold" fontSize="sm">
        All Categories
      </Text>
      <Box className="flex flex-col gap-4 h-[35vh] overflow-y-scroll no-scrollbar">
        {allCategories.map((item) => (
          <SideBarButton
            key={item.id}
            buttonIcon={item.icon}
            buttonName={item.name}
          />
        ))}
      </Box>
    </Box>
  );
};
