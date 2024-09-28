import AppRouter from './appRouter'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <div className=''>
      <RouterProvider router={AppRouter} />
    </div>
  )
}

export default App
