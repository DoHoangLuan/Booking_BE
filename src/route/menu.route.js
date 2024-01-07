import express from 'express';

import { createMenu, createMenuBooking } from '@/controllers/menuControllers';

const routerMenu = express.Router();

routerMenu.post('/createMenu', createMenu);
routerMenu.post('/createMenuBooking', createMenuBooking);

export default routerMenu;
