import { Navigate, Outlet, RouteObject } from "react-router-dom";
import { PATHS } from "../../constants/navigation";
import { Layout } from "../../../widgets";

const RoutesAPI: RouteObject[] = [
  {
    id: "root",
    path: PATHS.root,
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      { index: true, element: <Navigate to="/products" /> },
      {
        path: PATHS.products,
        lazy: () =>
          import("../../../pages").then(({ Products }) => ({
            Component: Products,
          })),
      },
      {
        path: PATHS.pricePlans,
        lazy: () =>
          import("../../../pages").then(({ PricePlans }) => ({
            Component: PricePlans,
          })),
      },
      {
        path: PATHS.pages,
        lazy: () =>
          import("../../../pages").then(({ Pages }) => ({
            Component: Pages,
          })),
      },
    ],
  },
];

export default RoutesAPI;
