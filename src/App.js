import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { useEffect, useState } from "react"
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// Styles and Components
import './App.css';
import CreateUserPage from './pages/CreateUser';
import LoginPage from './pages/Login';
import UserProfilePage from './pages/UserProfile';
import Header from './components/Header';

const firebaseConfig = {
  apiKey: "AIzaSyBoMWM1W_VeppS1CiK-MbkxEbyzafdalWw",
  authDomain: "dw-exercise-six.firebaseapp.com",
  projectId: "dw-exercise-six",
  storageBucket: "dw-exercise-six.appspot.com",
  messagingSenderId: "175079140701",
  appId: "1:175079140701:web:ecbe6acc486a9c35f64cb4"
};

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
  const [appInitialized, setAppInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInformation, setUserInformation] = useState({});

  useEffect(() => {
    initializeApp(firebaseConfig)
    setAppInitialized(true)
  }, []);
  // Check to see if User is logged in
  // User loads page, check their status
  // Set state accordingly 
  useEffect(() => {
    if (appInitialized) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          setUserInformation(user);
          setIsLoggedIn(true);
        } else {
          // User is signed out 
          setUserInformation({});
          setIsLoggedIn(false);
        }
        // Whenever state changes setLoading to false
        setIsLoading(false);
      });
    }
  }, [appInitialized]);

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
