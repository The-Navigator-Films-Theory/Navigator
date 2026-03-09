import { createBrowserRouter } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard';
import AdminLogin from '../pages/AdminLogin';
import Home from '../pages/Home';
import TheoryDetail from '../pages/TheoryDetail';
import TheoryLibrary from '../pages/TheoryLibrary';
import VocabularyHub from '../pages/VocabularyHub';
import AppLayout from './layout/AppLayout';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/theory', element: <TheoryLibrary /> },
      { path: '/theory/:slug', element: <TheoryDetail /> },
      { path: '/vocabulary', element: <VocabularyHub /> },
      { path: '/admin/login', element: <AdminLogin /> },
      { path: '/admin', element: <AdminDashboard /> },
    ],
  },
]);
