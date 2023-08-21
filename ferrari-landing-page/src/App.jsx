import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About";
import { ContactUs } from "./pages/ContactUs";

import Home from "./pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "about",
    element: <About />,
  },
  {
    path: "contactus",
    element: <ContactUs />,
  },
]);
function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;