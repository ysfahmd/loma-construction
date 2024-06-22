import './App.css';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './components/Root/Root';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import ContactPage from './components/ContactPage/ContactPage';
import ErrorPage from './components/ErrorPage/ErrorPage';

export default function App() {
  return (
    <RouterProvider router={createBrowserRouter(createRoutesFromElements(
      <Route path='/' element={<Root />} errorElement={<ErrorPage />} >
        <Route path='*' element={<ErrorPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/contact-us' element={<ContactPage />} />
      </Route>
    ))} />
  );
};
