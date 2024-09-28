
import {createBrowserRouter} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import DashboardLayout from './components/layouts/DashboardLayout';

// nested routes for the app
const AppRouter = createBrowserRouter([
  {
    path: '/',
    children:[
      {
        path: '',
        element: <PrivateRoute element={DashboardLayout} redirect={'/login'}/>,
        children:[
          {
            path: '',
            element: <h1>this is dashboard page</h1>
          },
        ]
      },
      {
        path: 'login',
        element: <h1>this is login</h1>
      }
    ]
  }
])

export default AppRouter;
