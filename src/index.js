import express from "express"
import { router } from "./routers/routers.js";
import  connectDB  from "./db.js";

const PORT = 3000
const app = express()
app.set("view engine", "ejs");
connectDB();
app.use(express.json())
app.use(router);

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}..`);
})
