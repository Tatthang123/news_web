import { SuccessResponse } from "../core/success.response.js"
import CategoryService from "../service/categorieService.js"
class CategoryController {
    static async createCategory(req, res) {
        new SuccessResponse({
            message: 'create a Category',
            data: await CategoryService.createCategory(req.body)
        }).send(res)
    }
    static async getAllcaategory(req, res) {

        new SuccessResponse({
            message: 'get all category',
            data: await CategoryService.getAllcategory()
        }).send(res)

    }
}
export default CategoryController