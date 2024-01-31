import express from 'express';
import routerUserAuth from './authUser.route';
import apiPath from '@/constants';
import bookingRoute from './booking.route';
import { userMiddleware } from '@/middlewares/user.middlewares';
import routerAuthStaff from './authStaff.route';

const router = express.Router();

router.use(apiPath.auth, routerUserAuth);
router.use(apiPath.booking, authMiddleware, bookingRoute);
router.use(apiPath.auth, routerAuthStaff);
router.use('/contact', routerContact);

export default router;