import express from 'express';

import routerAuth from './auth.route';
import routerBooking from './booking.route';
import routerContact from './contact.route';
import routerMenu from './menu.route';

const router = express.Router();

router.use('/auth', routerAuth);
router.use('/menu', routerMenu);
router.use('/booking', routerBooking);
router.use('/contact', routerContact);
export default router;
