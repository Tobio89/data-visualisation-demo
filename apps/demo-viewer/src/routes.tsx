import ViewerPage from "./pages/viewer/Viewer.page";
import AboutPage from "./pages/about/About.page";

const router = [
  {
    path: "/",
    element: <ViewerPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
];

export default router;
