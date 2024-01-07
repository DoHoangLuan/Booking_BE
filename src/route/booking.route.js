import express from 'express';

import { createBooking } from '@/controllers/booking.controller';

const routerBooking = express.Router();

routerBooking.post('/createBooking', createBooking);

export default routerBooking;
