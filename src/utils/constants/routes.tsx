import Home from '../../pages/home_page/HomePage';
import { Navigate } from 'react-router-dom';
import NotFound from '../../pages/not_found_page/NotFoundPage';
import { IRouterRoutes } from '../../interfaces/baseInterfaces';
import { SignInPage, SignUpPage } from '../../pages/authentication_page';
import Board from '../../pages/board_page';

const routes: IRouterRoutes = {
  public: [
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/',
      element: <Navigate to="/home" replace />,
    },
    {
      path: '/sign-up',
      element: <SignUpPage />,
    },
    {
      path: '/sign-in',
      element: <SignInPage />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
  private: [
    {
      path: '/boards',
      element: <Board />,
    },
    {
      path: '/boards/board/:id',
      element: <NotFound />,
    },
    {
      path: '/profile/:id',
      element: <NotFound />,
    },
  ],
};

export default routes;
