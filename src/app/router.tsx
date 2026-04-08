// Project Attribution
// Owner: Gail McFarland
// Contributors: Jay Choksi, Dhairya Patel, Rishyu Babariya

import { createBrowserRouter } from 'react-router-dom';
import { AdminRoute } from '../components/common';
import { AppLayout } from '../components/layout';
import AcademicLicense from '../pages/AcademicLicense';
import AdminDashboard from '../pages/AdminDashboard';
import AdminLogin from '../pages/AdminLogin';
import AdminTheories from '../pages/AdminTheories';
import AdminVocabulary from '../pages/AdminVocabulary';
import AdminQuizzes from '../pages/AdminQuizzes';
import AdminAnalytics from '../pages/AdminAnalytics';
import AnalysisToolkit from '../pages/AnalysisToolkit';
import AnalysisWorkspace from '../pages/AnalysisWorkspace';
import FlashcardsPage from '../pages/FlashcardsPage';
import Home from '../pages/Home';
import InteractiveLearning from '../pages/InteractiveLearning';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import QuizPage from '../pages/QuizPage';
import TermsOfService from '../pages/TermsOfService';
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
      { path: '/learn', element: <InteractiveLearning /> },
      { path: '/flashcards', element: <FlashcardsPage /> },
      { path: '/vocabulary', element: <VocabularyHub /> },
      { path: '/quiz/:theoryId', element: <QuizPage /> },
      { path: '/analysis', element: <AnalysisToolkit /> },
      { path: '/analysis/:filmId', element: <AnalysisWorkspace /> },
      { path: '/privacy', element: <PrivacyPolicy /> },
      { path: '/terms', element: <TermsOfService /> },
      { path: '/license', element: <AcademicLicense /> },
      { path: '/admin/login', element: <AdminLogin /> },
    ],
  },
  {
    path: '/admin',
    children: [
      {
        path: '',
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        ),
      },
      {
        path: 'theories',
        element: (
          <AdminRoute>
            <AdminTheories />
          </AdminRoute>
        ),
      },
      {
        path: 'vocabulary',
        element: (
          <AdminRoute>
            <AdminVocabulary />
          </AdminRoute>
        ),
      },
      {
        path: 'quizzes',
        element: (
          <AdminRoute>
            <AdminQuizzes />
          </AdminRoute>
        ),
      },
      {
        path: 'analytics',
        element: (
          <AdminRoute>
            <AdminAnalytics />
          </AdminRoute>
        ),
      },
    ],
  },
]);
