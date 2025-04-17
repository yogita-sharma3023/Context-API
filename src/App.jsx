import React, { Suspense, lazy } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import ContextUser from "./utils/UserContextData";
import { useContext } from "react";

// Lazy loading components
const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    //FETCH
    const newName = {
      myName: "t",
    };
    setData(newName.myName);
  }, []);
  return (
    <>
      <ContextUser.Provider value={{ contextName: data, setData }}>
        <Suspense fallback={<h2>Loading Header...</h2>}>
          <Header />
        </Suspense>
        <Suspense fallback={<h2>Loading Content...</h2>}>
          <Outlet />
        </Suspense>
      </ContextUser.Provider>
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
// function App() {
//   return <RouterProvider router={router} />;
// }

export default router;
