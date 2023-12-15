import "dotenv/config"
import express from 'express';
import { connectToDatabase } from './configs/db.config';
import router from "./route";
import cors from 'cors'

const app = express();
const PORT = 3001;

connectToDatabase();

app.use(express.json());
app.use(cors())
app.use('/api/v1', router)

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
