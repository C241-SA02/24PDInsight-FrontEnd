// dashboard
import UploadCard from "pages/Dashboards/UploadPage/Index";
import Dummy from "pages/Dashboards/Dummy"
// import History from "pages/Dashboards/History"

import Login from "pages/Authentication/Login";
import Logout from "pages/Authentication/LogOut";
import Register from "pages/Authentication/Register";

interface RouteObject {
  path: string;
  component: React.ComponentType<any>; // Use React.ComponentType to specify the type of the component
  exact?: boolean;
}

const authProtectedRoutes: Array<RouteObject> = [
  // Dashboard
  { path: "/", component: UploadCard },
  { path: "/uploads", component: UploadCard },
  { path: "/dashboard", component: Dummy },
  // { path: "/history", component: History },
  
  // profile
  // { path: "/user-profile", component: UserProfile },
];

const publicRoutes = [

  // authentication
  { path: "/login", component: Login },
  { path: "/logout", component: Logout },
  { path: "/register", component: Register },

]

export { authProtectedRoutes, publicRoutes };
