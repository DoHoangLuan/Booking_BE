import apiPath from "@/constants"
import authController from "@/controllers/userController"
import { validationMdw } from '../middlewares/validate.middlewares';
import loginValidation from "@/validations/loginValidation";
import express from "express";
import { authMiddleware } from "@/middlewares/auth.middlewares";
import registerUserValidation from "@/validations/registerUserValidation";

const routerUserAuth = express.Router()

routerUserAuth.post(apiPath.login_user,validationMdw(loginValidation),authController.LoginUser)
routerUserAuth.post(apiPath.register_user,validationMdw(registerUserValidation),authController.RegisterUser)
routerUserAuth.get(apiPath.me_user,authMiddleware,authController.Me)






export default routerUserAuth