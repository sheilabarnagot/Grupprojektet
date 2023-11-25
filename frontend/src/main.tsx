import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { HomePage } from './Home_Page/HomePage.tsx';
import { CreatePost } from './Posts/CreatePost.tsx';
import RegisterPage from './auth/pages/RegisterPage.tsx';
import LoginPage from './auth/pages/LoginPage.tsx';
import Footer from './footer/Footer.tsx';
import { CreateComment } from './Posts/CreateComment.tsx';
import GDPRInfo from './gdpr/Gdpr.tsx';
import { lazyWithPreload } from 'react-lazy-with-preload';
const SpecifikUserPost = lazyWithPreload(
  () => import('./Posts/SpecifikUserPost.tsx')
);
import UserSettings from './UserSettings.tsx'; // Uppdatera med rätt sökväg

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
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SpecifikUserPost />
          </Suspense>
        ),
        path: '/posts/:userid/:postid',
        loader: async ({ params }) => {
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

          SpecifikUserPost.preload();
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
