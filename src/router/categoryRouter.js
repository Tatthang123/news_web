import { Router } from "express";
import { asyncHandler } from "../middleware/asyncHandler.js";
import CategoryController from "../controller/categorieController.js";
const routerCategoryApi = Router();
routerCategoryApi.post("/create", asyncHandler(CategoryController.createCategory));
routerCategoryApi.get("/get", asyncHandler(CategoryController.getAllcaategory));
export default routerCategoryApi;
