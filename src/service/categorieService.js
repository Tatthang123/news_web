import { BadRequestError } from "../core/error.reponse.js"
import Category from "../model/categoryModel.js"

class CategoryService {
    static async createCategory(category) {
        const newCategory = await Category.create({
            name: category.name,
            description: category.description
        })
        if (!newCategory) {
            throw new BadRequestError('Not found')
        }
        return newCategory
    }
    static async getAllcategory() {
        return await Category.find().select('_id name');
    }
}
export default CategoryService