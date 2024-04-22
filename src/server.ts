// Import the 'express' module along with 'Request' and 'Response' types from express
import express, { Request, Response } from "express";
import cors from "cors";
// Create an Express application
const app = express();

// Specify the port number for the server
//const PORT = process.env.PORT || 3002;
const PORT = __filename.endsWith(".ts") ? 3003 : 3001;

app.use(cors({ origin: "http://localhost:3000" }));

// Define a route for the root path ('/')
app.get("/", (req: Request, res: Response) => {
  // Send a response to the client front end
  res.send({ message: "Hello from server!" });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${PORT}`);
});
export default app;
