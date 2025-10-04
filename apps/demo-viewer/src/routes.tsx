import { createBrowserRouter } from "react-router";
import ViewerPage from "./pages/viewer/Viewer.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ViewerPage />,
  },
]);

export default router;
