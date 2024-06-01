import { useMemo, useState } from 'react';

import { Box } from '@chakra-ui/react';

import { CreatePost } from '@/components';
import { FILTER, LIMIT, PAGE } from '@/data';
import { Post, HomeSideBar, useGetPostsQuery, RightNavBar } from '@/features';
import NavbarLayout from '@/layout/navbar-layout';

export const Home = () => {
  const [page] = useState(PAGE);

  const { data, refetch } = useGetPostsQuery(LIMIT, page, FILTER);

  const posts = useMemo(() => {
    if (data?.getAllPost) {
      const result = data.getAllPost.data.reverse();
      return result;
    }
  }, [data]);

  return (
    <NavbarLayout navBarChildren={<HomeSideBar />}>
      <Box className="flex w-full justify-between">
        <Box className="hidden md:block"></Box>
        <Box className="w-full lg:w-11/12 xl:w-8/12 overflow-y-scroll h-100vh  no-scrollbar">
          <CreatePost refetch={refetch} />
          {posts?.map((item) => (
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
              isPostToGroup={item.isPostToGroup}
              refetch={refetch}
            />
          ))}
        </Box>
        <Box className="hidden md:block"></Box>
        <RightNavBar className="w-3/12" />
      </Box>
    </NavbarLayout>
  );
};
