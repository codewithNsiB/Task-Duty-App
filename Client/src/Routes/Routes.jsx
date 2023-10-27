import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import MyTasks from "../Pages/MyTasks";
import Roots from "../Components/Roots";
import Account from "../Components/Account";
import NewTask from "../Pages/NewTask";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "tasks",
          element: <MyTasks />,
        },
        {
          path: "account",
          element: <Account />,
        },
        {
          path: "createTask",
          element: <NewTask />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
