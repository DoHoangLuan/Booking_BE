import express from "express";

import apiPath from "@/constants"
import authController from "@/controllers/userController"
import { userMiddleware } from "@/middlewares/user.middlewares";
import loginValidation from "@/validations/loginValidation";
import registerUserValidation from "@/validations/registerUserValidation";

import { validationMdw } from '../middlewares/validate.middlewares';

const routerUserAuth = express.Router();

routerUserAuth.post(apiPath.login_user,validationMdw(loginValidation),authController.LoginUser)
routerUserAuth.post(apiPath.register_user,validationMdw(registerUserValidation),authController.RegisterUser)
routerUserAuth.get(apiPath.me_user,userMiddleware,authController.Me)

export default routerUserAuth;
