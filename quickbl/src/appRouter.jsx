
import {createBrowserRouter} from 'react-router-dom';

// nested routes for the app
const AppRouter = createBrowserRouter([
  {
    path: '/',
    children:[
      {
        path: '',
        children:[
          {
            path: '',
            element: <h1>this is Hello World</h1>
          },
        ]
      },
    ]
  }
])

export default AppRouter;
