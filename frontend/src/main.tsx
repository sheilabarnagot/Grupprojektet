import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { HomePage } from './Home_Page/HomePage.tsx';
import RegisterPage from './auth/pages/RegisterPage.tsx';
import LoginPage from './auth/pages/LoginPage.tsx';
import Footer from './footer/Footer.tsx';
import { CreateComment } from './Posts/CreateComment.tsx';
import { lazyWithPreload } from 'react-lazy-with-preload';
import UserSettings from './UserSettings.tsx'; // Uppdatera med rätt sökväg
const SpecifikUserPost = lazyWithPreload(
  () => import('./Posts/SpecifikUserPost.tsx')
);
const CreatePost = lazyWithPreload(() => import('./Posts/CreatePost.tsx'));
const GDPRInfo = lazyWithPreload(() => import('./gdpr/Gdpr.tsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/user',
        element: <h1>User</h1>,
      },
      {
        element: <SpecifikUserPost />,
        path: '/posts/:userid/:postid',
        loader: async ({ params }) => {
          SpecifikUserPost.preload();
          const response = await fetch('http://localhost:3000/specifikpost', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userid: params.userid,
              postid: params.postid,
            }),
          });
          const result = await response.json();

          return result;
        },
      },
      {
        element: <CreateComment />,
        path: '/post/createpost/:postid',
      },
      {
        path: '/createpost',

        element: <CreatePost />,
        loader: () => {
          CreatePost.preload();
          return 0;
        },
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/user-settings', // Lägg till ny rutt för UserSettings
        element: <UserSettings />,
      },
      {
        path: '/gdpr',
        element: <GDPRInfo />,
        loader: () => {
          GDPRInfo.preload();
          return 0;
        },
      },
      {
        path: '/footer',
        element: <Footer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
