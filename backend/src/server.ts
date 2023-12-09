import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
//Importing .env validation

//For env File
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.json({
    msg: "API Running...",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
