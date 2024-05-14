import { Router } from "express";
import userController from "../controllers/user/user-controller"

const routes = Router();

routes.get("/all", userController.getAll);

export default routes;
