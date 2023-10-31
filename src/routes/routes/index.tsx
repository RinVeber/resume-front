import { createBrowserRouter } from 'react-router-dom';
import { paths } from './paths';
import NotFound from '../../pages/not-found/NotFound';
import Resume from '../../pages/resume/Resume';
import CreateVacancies from '../../pages/create-vacancies/CreateVacancies';
// import Vacancies from '../../pages/vacancies/Vacancies';
import VacanciesLayout from '../VacanciesLayout';
import MainPage from '../../pages/main-page/MainPage';
// import Respond from '../../pages/respond/Respond';
import RootLayout from '../RootLayout';
import Auth from '../../pages/auth/Auth';
import AuthLayout from '../AuthLayout';
import SearchLayout from '../SearchLayout';

export const router = createBrowserRouter([

  {
    path: paths.auth,
    element: <AuthLayout />,
    children: [
      {
        path: paths.auth,
        element: <Auth />,
      }
    ]
  },
  {
    path: paths.main,
    element: <RootLayout /> ,
    children: [
      {
        path: '/',
        index: true,
        element: <MainPage />
      },
      {
        path: paths.vacancies,
        element: <VacanciesLayout />,
        children: [
          {
            path: `${paths.vacancies}/:id`,
            element: <VacanciesLayout />,
          },
        ]
      },
   
      {
        path: `${paths.search}?`,
        element: <SearchLayout />,
      },
      {
        path: `${paths.resume}/:id`,
        element: <Resume />,
        // loader: ResumeLoader,
      },
      {
        path: paths.create,
        element: <CreateVacancies />,
      },
    ],
  },
  {
    path: paths.notFound,
    element: <NotFound />,
  },
]);
