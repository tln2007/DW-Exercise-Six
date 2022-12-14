import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useEffect, useState } from "react"
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// Styles and Components
import './App.css';
import CreateUserPage from './pages/CreateUser';
import LoginPage from './pages/Login';
import UserProfilePage from './pages/UserProfile';

const firebaseConfig = {
  apiKey: "AIzaSyBoMWM1W_VeppS1CiK-MbkxEbyzafdalWw",
  authDomain: "dw-exercise-six.firebaseapp.com",
  projectId: "dw-exercise-six",
  storageBucket: "dw-exercise-six.appspot.com",
  messagingSenderId: "175079140701",
  appId: "1:175079140701:web:ecbe6acc486a9c35f64cb4"
};

function App() {
  const [appInitialized, setAppInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInformation, setUserInformation] = useState({});

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <UserProfilePage 
          isLoading={isLoading} 
          isLoggedIn={isLoggedIn} 
          userInformation={userInformation}
          setIsLoggedIn={setIsLoggedIn} 
          setUserInformation={setUserInformation}
         />
      ),
    },
    {
        path: "/login",
        element: (
          <LoginPage 
            isLoading={isLoading} 
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn} 
            setUserInformation={setUserInformation}
          />
        ),//prop isLoggedIn tells us if false, go to login or create, if true, go to user profile
    },
    {
        path: "/create",
        element: (
          <CreateUserPage 
            isLoading={isLoading}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn} 
            setUserInformation={setUserInformation} />
        ),
    },
  ]);
  //ensure app is initialized when it is ready to be
  useEffect(() => { //only do after first render
    //initialize firebase
    initializeApp(firebaseConfig);
    setAppInitialized(true);
  }, [])

  //check to see if user is logged in
  //if logged in, load page and check user status
  //set state accordingly
  useEffect(() => {
    if(appInitialized) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) =>{
        if(user) {
          //user is signed in, see docs for a list of available properties
          setUserInformation(user);
          setIsLoggedIn(true);
        }
        else {
          //user is signed out
          setUserInformation({});
          setIsLoggedIn(false);
        }
        //whenever state changes setLoading to false
        setIsLoading(false);
      })
    }
  }, [appInitialized])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
