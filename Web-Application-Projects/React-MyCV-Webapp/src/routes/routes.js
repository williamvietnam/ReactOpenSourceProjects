import Introduction from "../pages/Introduction";
import Education from "../pages/Education";
import Goals from "../pages/Goals";
import Interests from "../pages/Interests";
import Traveling from "../pages/Traveling";

// Public routes
const publicRoutes = [
  { path: "/", page: Introduction },
  { path: "/education", page: Education },
  { path: "/goals", page: Goals },
  { path: "/interests", page: Interests },
  { path: "/traveling", page: Traveling },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };