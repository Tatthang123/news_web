import { Router } from "express";
import { asyncHandler } from "../middleware/asyncHandler.js";
import ArticleController from "../controller/articleController.js";

const routerArticleapi = Router();

routerArticleapi.post("/create", asyncHandler(ArticleController.createArticle));
routerArticleapi.get("/:id", asyncHandler(ArticleController.getDetail));
routerArticleapi.get("/category/:id", asyncHandler(ArticleController.getDetailBycategory));
routerArticleapi.put("/update:id", asyncHandler(ArticleController.updateArticle));
export default routerArticleapi;

