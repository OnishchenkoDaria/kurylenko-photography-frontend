import './App.css'
//const baseUrl = 'http://localhost:3001/'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Page404 from './pages/Page404'
import routes from './routes'

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout/>,
      errorElement:<Page404/>,
      children: routes
    },
  ]) 
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
