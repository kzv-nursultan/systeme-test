import { Navigate, Outlet, RouteObject } from "react-router-dom";
import { Layout } from "../../components";

const RoutesAPI: RouteObject[] = [
  {
    id: "root",
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
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
