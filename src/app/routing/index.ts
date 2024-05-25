import { createBrowserRouter } from "react-router-dom";
import RoutesAPI from "./api/lazy";

const router = createBrowserRouter(RoutesAPI);

export default router;
