import { SuccessResponse } from "../core/success.response.js";
import CommentService from "../service/commentService.js";
class CommentController {
    static async createComment(req, res) {
        const userId = req.user.userId
        new SuccessResponse({
            message: "Create a comment",
            data: await CommentService.createComment(userId, req.body)
        }).send(res)
    }
    static async getComment(req, res) {
        const id = req.params.id
        const { sortOrder } = req.query;
        new SuccessResponse({
            message: 'Get comment ',
            data: await CommentService.getComment(id, sortOrder)
        }).send(res)
    }
    static async deleteComent(req, res) {
        new SuccessResponse({
            message: 'Delete comment',
            data: await CommentService.deleteComent(req.params.id)
        })
    }
}
export default CommentController
