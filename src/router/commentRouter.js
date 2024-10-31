import { Router } from "express";
import { asyncHandler } from "../middleware/asyncHandler.js";
import CommentController from "../controller/commentController.js";
const routerCommentapi = Router();

routerCommentapi.post("/create", asyncHandler(CommentController.createComment));
routerCommentapi.get("/:id", asyncHandler(CommentController.getComment));
routerCommentapi.delete("/:id", asyncHandler(CommentController.deleteComent));

export default routerCommentapi