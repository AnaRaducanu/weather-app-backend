import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

//const PORT = __filename.endsWith(".ts") ? 3003 : 3001;
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", (req: Request, res: Response) => {
  // Send a response to the client front end
  res.send({ message: "Hello from server!" });
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
export default server;
