import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '../components/layout';
import AdminDashboard from '../pages/AdminDashboard';
import AdminLogin from '../pages/AdminLogin';
import AnalysisToolkit from '../pages/AnalysisToolkit';
import AnalysisWorkspace from '../pages/AnalysisWorkspace';
import Home from '../pages/Home';
import TheoryDetail from '../pages/TheoryDetail';
import TheoryLibrary from '../pages/TheoryLibrary';
import VocabularyHub from '../pages/VocabularyHub';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/theory', element: <TheoryLibrary /> },
      { path: '/theory/:slug', element: <TheoryDetail /> },
      { path: '/vocabulary', element: <VocabularyHub /> },
      { path: '/analysis', element: <AnalysisToolkit /> },
      { path: '/analysis/:filmId', element: <AnalysisWorkspace /> },
      { path: '/admin/login', element: <AdminLogin /> },
      { path: '/admin', element: <AdminDashboard /> },
    ],
  },
]);