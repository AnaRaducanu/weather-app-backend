import { Request, Response } from 'express';
import { app, PORT } from './config.ts';
import cors from 'cors';

app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/', (req: Request, res: Response) => {
  // Send a response to the client front end
  res.send({ message: 'Hello from server!' });
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
export default server;
