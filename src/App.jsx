import React from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/pages/Login';
import Body from './components/Body';
import Home from './components/Home';
import Profile from './components/ForLogUser/Profile';
import ShareLink from './components/share/ShareLink';

function App() {
  return (
    <RouterProvider router={appRouter}>
      <div class="w-full h-screen flex flex-col items-start justify-center bg-emerald-500">
        <Outlet />
      </div>
    </RouterProvider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
  },
  {
    path: '/home/:name',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/user/profile/:name',
    element: <Profile />,
  },
  {
    path: '/share/:userID/:shareID',
    element: <ShareLink />,
  },
  {
    path: '*',
    element: <div>Not Found</div>,
  },
]);

export default App;
