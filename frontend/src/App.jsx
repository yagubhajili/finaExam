
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import { routes } from './routes/routes';

function App() {

  const router = createBrowserRouter(routes);


  return (
    <RouterProvider router={router} />
  )
}

export default App
