import express from 'express';

import apiPath from '@/constants';
import staffController from '@/controllers/staffController';
import { authStaffMiddleware } from '@/middlewares/staff.middlewares';
import { validationMdw } from '@/middlewares/validate.middlewares';
import loginValidation from '@/validations/loginValidation';
import registerStaffValidation from '@/validations/registerStaffValidation';

const routerAuthStaff = express.Router();

routerAuthStaff.post(
  apiPath.login_staff,
  validationMdw(loginValidation),
  staffController.LoginStaff,
);
routerAuthStaff.post(
  apiPath.register_staff,
  validationMdw(registerStaffValidation),
  staffController.RegisterStaff,
);
routerAuthStaff.get(apiPath.me_staff, authStaffMiddleware, staffController.Me);

export default routerAuthStaff;
