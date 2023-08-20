
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


import App from "./App.jsx";
import ColumnAbout from "./components/Body/ColumnAbout";
import Portfolio from "./Pages/Portfolio"
import Contact from "./components/Body/Contact"
import Resume from "./Pages/Resume"
import "./index.css";
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <ColumnAbout />,
      },
      {
        path: '/About',
        element: <ColumnAbout />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);


