import { Router } from "express";
import { asyncHandler } from "../middleware/asyncHandler.js";
import userController from "../controller/userController.js";
const routerUserapi = Router();

routerUserapi.post("/register", asyncHandler(userController.createUser));
routerUserapi.get('/profile/:id', asyncHandler(userController.getProfile))
export default routerUserapi;

