import { useMemo } from 'react';

import { Box } from '@chakra-ui/react';
import { BiCake, BiPhone } from 'react-icons/bi';
import { FaRegHeart } from 'react-icons/fa';
import {
  MdOutlineAddHomeWork,
  MdOutlineBook,
  MdOutlineHome,
  MdOutlineMailOutline,
  MdOutlineTimer,
} from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';

import { CreatePost } from '@/components';
import {
  CoverImage,
  Information,
  ListFriend,
  ListPhoto,
  Post,
  ProfileAvatar,
  useGetPostByAuthor,
  useGetUserById,
} from '@/features';
import { converDateToString } from '@/utils';
import { LIMIT, PAGE } from '@/data';
import { useParams } from 'react-router-dom';
import { useQueryInfoUser } from '@/features/auth';

export const Profile = () => {
  const param = useParams();
  const { data, refetch: refetchInforUser } = useGetUserById(param.id!);
  const { data: authorData } = useQueryInfoUser();

  const informationUser = useMemo(() => {
    if (data) {
      const result = [
        {
          id: uuidv4(),
          icon: <MdOutlineHome />,
          name: data.getUserById.address,
        },
        {
          id: uuidv4(),
          icon: <MdOutlineAddHomeWork />,
          name: data.getUserById.company,
        },
        {
          id: uuidv4(),
          icon: <MdOutlineBook />,
          name: data.getUserById.university,
        },
        {
          id: uuidv4(),
          icon: <FaRegHeart />,
          name:
            data.getUserById.relationship === 0
              ? 'Single'
              : data.getUserById.relationship === 1
                ? 'Married'
                : 'Other',
        },
        {
          id: uuidv4(),
          icon: <BiCake />,
          name: data.getUserById.dayOfBirth,
        },
        {
          id: uuidv4(),
          icon: <BiPhone />,
          name: data.getUserById.phone,
        },
        {
          id: uuidv4(),
          icon: <MdOutlineMailOutline />,
          name: data.getUserById.email,
        },
        {
          id: uuidv4(),
          icon: <MdOutlineTimer />,
          name: converDateToString(data.getUserById.createdAt as Date),
        },
      ];
      return result;
    }
  }, [data]);

  const { data: posts, refetch: refetchPostsAuthor } = useGetPostByAuthor(
    data?.getUserById.id as string,
    LIMIT,
    PAGE,
  );
  const listPosts = useMemo(() => {
    if (posts) {
      const result = posts.getPostByAuthor.data;
      return result;
    }
  }, [posts]);

  return (
    <Box>
      <Box className="relative z-10">
        <CoverImage />
      </Box>
      <Box className="flex w-full justify-center items-center absolute top-2/4 bg-white">
        <Box className="flex flex-col gap-4 w-5/6 md:w-full md:flex-row md:mx-4 lg:w-full xl:w-4/6">
          <Box className="w-full md:w-1/4 z-20">
            <ProfileAvatar />
            <Information
              informationUser={informationUser!}
              refetch={refetchInforUser}
            />
            <ListPhoto files={data?.getUserById.files!} />
            <ListFriend />
          </Box>
          <Box className="w-full md:w-3/4 md:mt-[115px]">
            {authorData?.getInfoUser.id === param.id ? (
              <CreatePost refetch={refetchPostsAuthor} />
            ) : (
              ''
            )}
            {listPosts?.map((item) => (
              <Post
                key={item.id}
                content={item.content}
                images={item.images}
                fullname={item.author.fullname}
                avatar={item.author.avatar}
                createdAt={item.createdAt as Date}
                idPost={item.id}
                usersLiked={item.usersLiked}
                topic={item.topic}
                idAuthor={item.author.id}
                refetch={refetchPostsAuthor}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
