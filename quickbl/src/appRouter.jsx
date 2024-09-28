import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import DashboardLayout from './components/layouts/DashboardLayout';
import LoginLayout from './components/layouts/LoginLayout';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import ForgetPasswordPage from './components/pages/ForgetPasswordPage';

// nested routes for the app
const AppRouter = createBrowserRouter([
  {
    path: '/',
    children: [
      // Public routes for login and registration using LoginLayout
      {
        path: 'login',
        element: <LoginLayout />, // Wrap login page with LoginLayout
        children: [
          {
            path: '',
            element: <LoginPage />,
          },
          {
            path: 'forgetpassword',
            element: <ForgetPasswordPage />,
          },
          {
            path: '*',
            element: <h1>404 Not Found</h1>,
          }
        ],
      },
      {
        path: 'register',
        element: <LoginLayout />, // Wrap register page with LoginLayout
        children: [
          {
            path: '',
            element: <RegisterPage />,
          },
          {
            path: '*',
            element: <h1>404 Not Found</h1>,
          }
        ],
      },

      // Private route for dashboard using DashboardLayout
      {
        path: '',
        element: <PrivateRoute element={DashboardLayout} redirect={'/login'} />,
        children: [
          {
            path: '',
            element: <h1>This is the dashboard page</h1>,
          },
          {
            path: '*',
            element: <h1>404 Not Found</h1>,
          }
        ],
      },
      {
        path: '*',
        element: <h1>404 Not Found</h1>,
      }
    ],
  },
]);

export default AppRouter;
