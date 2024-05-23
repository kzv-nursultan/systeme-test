import { Navigate, Outlet, RouteObject } from "react-router-dom";

const RoutesAPI: RouteObject[] = [
  {
    id: "root",
    path: "/",
    element: <Outlet />,
    children: [
      { index: true, element: <Navigate to="/products" /> },
      {
        path: "/products",
        lazy: () =>
          import("../../pages").then(({ Products }) => ({
            Component: Products,
          })),
      },
    ],
  },
];

export default RoutesAPI;
