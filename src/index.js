import 'dotenv/config';

import cors from 'cors';
import express from 'express';

import { connectToDatabase } from './configs/db.config';
import { errorHandlingMiddleware } from './middlewares/handleError.middleware';
import isPermissionMdw from "./middlewares/role.middleware";
import router from "./route";

const app = express();
const PORT = 3001;

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/api/v1', router);
app.use(errorHandlingMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
