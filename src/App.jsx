import React from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/pages/Login';
import Body from './components/Body';
import Home from './components/Home';
import Profile from './components/ForLogUser/Profile';

function App() {
  return (
    <RouterProvider router={appRouter}>
      <div className="w-full h-screen flex flex-col items-start justify-center bg-emerald-500">
        <Outlet />
      </div>
    </RouterProvider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />, // Render a layout component if needed
  },
  {
    path: '/home',
    // element: <PrivateRoute Component={Home} />,
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
]);

export default App;
