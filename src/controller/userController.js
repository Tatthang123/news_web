import userService from "../service/userService.js";
import { SuccessResponse } from "../core/success.response.js";
class userController {
    static async createUser(req, res) {
        new SuccessResponse({
            message: "register user",
            data: await userService.createUser(req.body),
        }).send(res);
    }
    static async getProfile(req, res) {
        new SuccessResponse({
            message: 'get profile user',
            data: await userService.getProfile(req.params.id)
        }).send(res);
    }
    static async updateProfile(req, res) {
        new SuccessResponse({
            message: 'update profile user',
            data: await userService.updateProfile(req.params.id, req.body)
        }).send(res);
    }
}
export default userController