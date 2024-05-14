import { Router } from "express";
import userRoutes from "./user-routes"
import groupRoutes from "./group-routes"

const routes = Router();

routes.use("/groups", groupRoutes);
routes.use("/users", userRoutes);

export default routes;
