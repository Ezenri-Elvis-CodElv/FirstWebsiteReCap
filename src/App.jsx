import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Cart from './pages/Cart';
import Login from './pages/Auth/Login';
import Collection from './pages/Collection';
import SignUp from './pages/Auth/SignUp';
import MensCollection from './pages/MensCollection';
import WomensCollection from './pages/WomensCollection';
// import AuthProvider from './Components/AuthProvider';
import PrivateRoute from './routes/PrivateRoutes';
// import LanguageProvider from './Components/LanguageProvider';
import ProductPage from './pages/ProductPage';
import HomeRoutes from './routes/HomeRoutes';
import LogoSpinner from './components/LogoSpinner';
import React, { useState, useEffect } from 'react';
// import LogoSpinner from './LogoSpinner';
import Spinner from './components/Spinner';
import ProductDetails from './pages/ProductDetails';






const router = createBrowserRouter([
  {
    path: "",
    element: <HomeRoutes />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/contact",
        element: (
          <Spinner>

          <PrivateRoute>
            <Contact />
          </PrivateRoute>
          </Spinner>
        ),
      },
      {
        path: '/productdetails',
        element: <ProductDetails/>
      },
      {
        path: "/about",
        element: (
          <Spinner>

          <PrivateRoute>
            <About />
          </PrivateRoute>
          </Spinner>
        ),
      },
      {
        path: "/productpage",
        element: (
          <Spinner>

          <PrivateRoute>
            <ProductPage />
          </PrivateRoute>
          </Spinner>
        ),
      },
      {
        path: "/cart",
        element: (
          <Spinner>

          <PrivateRoute>
            <Cart />
          </PrivateRoute>
          </Spinner>
        ),
      },
      {
        path: "/collection",
        element: (
          <Spinner>

          <PrivateRoute>
            <Collection />
          </PrivateRoute>
          </Spinner>
        ),
        children: [
          {
            path: "menscollection",
            element: (
              <PrivateRoute>
                <MensCollection />
              </PrivateRoute>
            ),
          },
          {
            path: "womenscollection",
            element: (

              <PrivateRoute>
                <WomensCollection />
              </PrivateRoute>
            ),
          }
        ]
      },
    ]
  },
  {
    path: "/dashboard",
    element: (
      <Spinner>

      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
      </Spinner>
    ),
  },
  {
    path: "/login",
    element:<Login />
  },
  {
    path: "/signup",
    element:<SignUp />
  },
  
]);

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LogoSpinner />;
  }
  return (

  //  <Spinner>

     <RouterProvider router={router} />
  //  {/* </Spinner> */}
    
    
  );
}

export default App;