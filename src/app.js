import express from "express";
import reporteRouter from "./routes/reporte.routes.js";
import { cloudinaryConfig } from './server/config/cloudinaryConfig.js'

const app = express();

app.use(express.json())
app.use("/analysis", reporteRouter)
app.use('*', cloudinaryConfig);
app.set("port", 3000);



app.listen (app.get("port"), () => {
    console.log ("Server is running on port", app.get ("port"));
})
