import ViewerPage from "./pages/viewer/Viewer.page";
import AboutPage from "./pages/about/About.page";
import HomePage from "./pages/home/Home.page";

const router = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/viewer",
    element: <ViewerPage />,
  },

  {
    path: "/about",
    element: <AboutPage />,
  },
];

export default router;
