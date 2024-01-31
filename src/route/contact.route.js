import express from 'express';

import { contactController } from '@/controllers/contact.controller';

const routerContact = express.Router();

routerContact.post('/inviteRestaurant', contactController.createContact);

export default routerContact;
