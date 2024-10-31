import { BadRequestError, NotFoundError } from "../core/error.reponse.js"
import Comment from "../model/commentModel.js"

class CommentService {
    static async createComment(userId, comment) {
        const newComment = await Comment.create({
            articleId: comment.articleId,
            userId: userId,
            content: comment.content
        })
        if (!newComment) {
            throw new BadRequestError('Creata faild')
        }
        return newComment
    }
    static async getComment(id, sortOrder) {
        const comment = await Comment.find({ _article: id }).populate('userId', "username")
            .sort({ createdAt: sortOrder === 'oldest' ? 1 : -1 });
        if (!comment) {
            {
                throw new NotFoundError('Not found')
            }
        }
    }
    static async deleteComent(commentId) {
        const deletedComment = await Comment.findByIdAndDelete(commentId);
        if (!deletedComment) {
            throw new NotFoundError('Not found'); // Nếu không tìm thấy bình luận
        }
        return deletedComment
    }
}
export default CommentService