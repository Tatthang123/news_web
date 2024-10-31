import { SuccessResponse } from "../core/success.response.js"
import ArticleService from "../service/articleService.js"

class ArticleController {

    static async createArticle(req, res) {
        const userId = req.user.userId
        new SuccessResponse({
            message: "Create a Article",
            data: await ArticleService.createArticle(userId, req.body)
        }).send(res);
    }
    static async getDetail(req, res) {
        const id = req.params.id
        console.log('id', id)
        new SuccessResponse({
            message: 'Get a article',
            data: await ArticleService.getDetail(id)
        }).send(res)
    }
    static async updateArticle(req, res) {
        const id = req.params.id
        new SuccessResponse({
            message: 'update a article',
            data: await ArticleService.updateArticle(id, req.body)
        }).send(res)
    }
    static async getDetailBycategory(req, res) {
        const id = req.params.id
        new SuccessResponse({
            message: 'get article by category',
            data: await ArticleService.getDetailBycategory(id)
        }).send(res)
    }
}

export default ArticleController