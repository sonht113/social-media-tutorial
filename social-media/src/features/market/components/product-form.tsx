import {
  Box,
  FormErrorMessage,
  Input,
  InputGroup,
  Text,
} from '@chakra-ui/react';
import { Control, FieldErrors } from 'react-hook-form';
import { CategoryType, InputProductType } from '../service/type';
import { FC, useMemo } from 'react';
import { DataFieldInputType } from '@/ts/types';
import { FormCustom, Upload } from '@/components';
import { useQueryCategories } from '../hooks/use-category-query';
import { categoriesItem } from '../service/constant';

export type Props = {
  control: Control<InputProductType, unknown>;
  errors: FieldErrors<InputProductType>;
  disable: boolean;
};

const ProductForm: FC<Props> = ({ control, errors, disable = false }) => {
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

  const dataFormCustom: DataFieldInputType<InputProductType>[] = useMemo(
    () => [
      {
        isRequired: true,
        control,
        name: 'name',
        element: ({ field }) => (
          <Box className="mb-4 font-bold">
            <Text>Name</Text>
            <InputGroup>
              <Input {...field} id="name" disabled={disable} />
              {errors.name && (
                <FormErrorMessage>
                  {errors.name.message as string}
                </FormErrorMessage>
              )}
            </InputGroup>
          </Box>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'description',
        element: ({ field }) => (
          <Box className="mb-4 font-bold">
            <Text>Description</Text>
            <InputGroup>
              <Input {...field} id="description" disabled={disable} />
              {errors.description && (
                <FormErrorMessage>
                  {errors.description.message as string}
                </FormErrorMessage>
              )}
            </InputGroup>
          </Box>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'price',
        element: ({ field }) => (
          <Box className="mb-4 font-bold">
            <Text>Price</Text>
            <InputGroup>
              <Input {...field} id="price" disabled={disable} type="number" />
              {errors.price && (
                <FormErrorMessage>
                  {errors.price.message as string}
                </FormErrorMessage>
              )}
            </InputGroup>
          </Box>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'category',
        element: ({ field }) => (
          <Box className="mb-4 font-bold">
            <Text>Category</Text>
            <InputGroup>
              <select
                {...field}
                id="category"
                disabled={disable}
                className="w-full border !border-[#E2E8F0] outline-[#E2E8F0] h-10"
              >
                {allCategories.map((item) => (
                  <option value={item.rank} key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>

              {errors.category && (
                <FormErrorMessage>
                  {errors.category.message as string}
                </FormErrorMessage>
              )}
            </InputGroup>
          </Box>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'images',
        element: ({ field }) => (
          <Box className="mb-4 font-bold">
            <Text>Images</Text>
            <Upload
              {...field}
              disable={disable}
              isMultiple={true}
              typeUpload="normal"
            />
            {errors.images && (
              <FormErrorMessage>
                {errors.images.message as string}
              </FormErrorMessage>
            )}
          </Box>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'location',
        element: ({ field }) => (
          <Box className="mb-4 font-bold">
            <Text>Location</Text>
            <InputGroup>
              <Input {...field} id="location" disabled={disable} />
              {errors.location && (
                <FormErrorMessage>
                  {errors.location.message as string}
                </FormErrorMessage>
              )}
            </InputGroup>
          </Box>
        ),
      },

      // {
      //   isRequired: true,
      //   control,
      //   name: 'videos',
      //   element: ({ field }) => (
      //     <Box className="mb-4 font-bold">
      //       <Text>Videos</Text>
      //       <Upload
      //         {...field}
      //         disable={disable}
      //         isMultiple={true}
      //         typeUpload="normal"
      //       />
      //       {errors.videos && (
      //         <FormErrorMessage>
      //           {errors.videos.message as string}
      //         </FormErrorMessage>
      //       )}
      //     </Box>
      //   ),
      // },
    ],
    [control, errors, disable],
  );
  return (
    <Box>
      <FormCustom data={dataFormCustom} />
    </Box>
  );
};

export default ProductForm;
