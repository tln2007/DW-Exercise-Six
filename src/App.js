import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './App.css';
import CreateUserPage from './pages/CreateUser';
import LoginPage from './pages/Login';
import UserProfilePage from './pages/UserProfile';
import Header from './components/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserProfilePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/create",
    element: <CreateUserPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
