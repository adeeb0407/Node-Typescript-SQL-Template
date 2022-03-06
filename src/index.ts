import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/config"
import trialRouter from "./routes/routeTrial"

const app = express()
dotenv.config()

app.use(express.json({limit : "30mb"}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

db.connect((err : any) => {
  if(err) console.log(err);
  console.log(`MYSQL Database connected`);
})

// app.use(MainRouters)
app.use('/trial', trialRouter)

app.get("/", (req: Request, res: Response): void => {
  res.json({ message: "Please Like the Video!" });
});

app.listen("3001", (): void => {
  console.log("Server Running!");
});