
import React, { Children } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Navbar/Home';
import Login from './Navbar/Login';
import Register from './Navbar/Register';
import RootLayout from './Navbar/RootLayout';
import ErrorPage from './SpecialSetups/ErrorPage';
import VideoUpload from './Components/VideoUpload';
import DataProtectionPolicy from './Footer/DataProtection';
import About from './Navbar/About';
import Services from './Navbar/Services';
import Contact from './Navbar/Contact';
import TermsOfService from './Footer/TermsOfServices';
import Privacy from './Footer/PrivacyPolicy';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'video-upload', element: <VideoUpload /> },
      { path: 'data-protection', element: <DataProtectionPolicy /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'contact', element: <Contact /> },
      { path: 'terms', element: <TermsOfService /> },
      { path: 'privacy', element: <Privacy /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
