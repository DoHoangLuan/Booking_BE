import express from 'express';

import apiPath from '@/constants';
import staffController from '@/controllers/staffController';
import isPermissionMdw from '@/middlewares/role.middleware';
import authStaffMiddleware from '@/middlewares/staff.middlewares';
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

routerAuthStaff.delete(apiPath.id, staffController.DeleteStaff);

routerAuthStaff.get(apiPath.me_staff, authStaffMiddleware.verifyTokenStaff, staffController.Me);

export default routerAuthStaff;
