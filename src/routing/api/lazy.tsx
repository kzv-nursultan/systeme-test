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
      {
        path: "/price-plans",
        lazy: () =>
          import("../../pages").then(({ PricePlans }) => ({
            Component: PricePlans,
          })),
      },
      {
        path: "/pages",
        lazy: () =>
          import("../../pages").then(({ Pages }) => ({
            Component: Pages,
          })),
      },
    ],
  },
];

export default RoutesAPI;
