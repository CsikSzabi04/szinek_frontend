import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ujszin from './Pages/Ujszin';
import Notfound from './Pages/Notfound';
import Nevjegy from './Pages/Nevjegy';
import Layout from './Pages/Layout';
import Szinek from './Pages/Szinek';

function App() {
  const [szinek, setSzinek] = useState([]);


  const router = createBrowserRouter([
    { element: <Layout />, children: [
      { path: "/", element: <App/> },
      { path: "/szinek", element: <Szinek szinek={szinek} setSzinek={setSzinek}/> },
      { path: "/ujszin", element: <Ujszin /> },
      { path: "/nevjegy", element: <Nevjegy /> },
      { path: "*", element: <Notfound /> }
    ]}
  ]);

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
