// rrd imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import { Home, About, Contact } from "./pages";

// layouts
import MainLayout from "./layouts/MainLayout";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
