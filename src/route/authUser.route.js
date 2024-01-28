import apiPath from "@/constants"
import express from "express";
import authController from "@/controllers/userController"
import { validationMdw } from '../middlewares/validate.middlewares';
import { userMiddleware } from "@/middlewares/user.middlewares";
import loginValidation from "@/validations/loginValidation";
import registerUserValidation from "@/validations/registerUserValidation";

const routerUserAuth = express.Router()

routerUserAuth.post(apiPath.login_user,validationMdw(loginValidation),authController.LoginUser)
routerUserAuth.post(apiPath.register_user,validationMdw(registerUserValidation),authController.RegisterUser)
routerUserAuth.get(apiPath.me_user,userMiddleware,authController.Me)






export default routerUserAuth