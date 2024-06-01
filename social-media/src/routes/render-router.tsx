import { FC, lazy } from 'react';

import { Navigate, useRoutes } from 'react-router-dom';

import { LOGIN_PATH } from '@/data';
import { routeList } from '@/data/constant/navs';
import LayoutComponent from '@/layout';
import { EditPost, GroupDetail, Login, PostDetail, Profile } from '@/pages';

const NotFound = lazy(() => import('@/pages/not-found'));

const routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <LayoutComponent />,
    children: [
      {
        path: '',
        element: <Navigate to={LOGIN_PATH} />,
      },
      ...routeList,
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: 'group/:id',
        element: <GroupDetail />,
      },
      {
        path: `/posts/:id`,
        element: <PostDetail />,
      },
      {
        path: `profile/:id/posts/:id`,
        element: <PostDetail />,
      },
      {
        path: `edit-post/:id`,
        element: <EditPost />,
      },
      {
        path: `profile/:id`,
        element: <Profile />,
      },
    ],
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routes);

  return element;
};

export default RenderRouter;
