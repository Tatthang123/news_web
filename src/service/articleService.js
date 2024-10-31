import { BadRequestError, NotFoundError } from "../core/error.reponse.js"
import Article from "../model/articleModel.js"

class ArticleService {
    static async createArticle(userId, article) {
        const newArticle = await Article.create({
            title: article.title,
            contents: article.contents,
            authorId: userId,
            categoryId: article.categoryId,
            image: article.image
        })
        if (!newArticle) {
            throw new BadRequestError('Create article faild')
        }
        return newArticle
    }
    static async getDetail(articleId) {
        const article = await Article.findOneAndUpdate(
            { _id: articleId }, // Tìm bài viết theo ID
            { $inc: { views: 1 } }, // Tăng lượt xem lên 1
            { new: true } // Trả về tài liệu đã được cập nhật
        ).populate('authorId', 'username email');
        if (!article) {
            throw new NotFoundError('Not found')
        }
        return article
    }
    static async updateArticle(id, article) {
        return await Article.updateOne({ _id: id }, article)
    }
    static async getDetailByCategory(categoryId) {
        const articles = await Article.find({
            categoryId,                  // Lọc theo ID của danh mục
            status: 'approved'           // Chỉ lấy bài viết đã được phê duyệt
        }).populate('categoryId', 'name'); // Lấy thông tin tên danh mục

        if (!articles || articles.length === 0) {
            throw new NotFoundError('Not found');
        }

        return articles;
    }
}
export default ArticleService