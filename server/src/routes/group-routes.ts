import { Router } from "express";
import groupController from "../controllers/group/group-controller"

const routes = Router();

routes.get("/all", groupController.getAll);

export default routes;
