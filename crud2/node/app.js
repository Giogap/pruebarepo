import express from "express";
import cors from "cors";
//importar db
import db from "./database/db.js";
//importar enrutador
import blogRoutes from './routes/routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/blogs', blogRoutes);

try {
    await db.authenticate();
    console.log('DB Ok')
} catch (error) {
    console.log(`error db: ${error}`)
}

app.get('/', (req, res) => {
    res.send("Jelou");
});

app.listen(3001, () => {
    console.log("Server Ok");
})