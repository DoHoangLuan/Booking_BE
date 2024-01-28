import "dotenv/config"
import express from 'express';
import { connectToDatabase } from './configs/db.config';
import router from "./route";
import cors from 'cors'
import isPermissionMdw from "./middlewares/role.middleware";

const app = express();
const PORT = 3001;

connectToDatabase();

app.use(express.json());
app.use(cors())
app.use('/api/v1',isPermissionMdw, router)

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
