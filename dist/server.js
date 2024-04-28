import { app } from './config.js';
import cors from 'cors';
import { PORT } from './config.js';
app.use(cors({ origin: 'http://localhost:3000' }));
app.get('/', (req, res) => {
  // Send a response to the client front end
  res.send({ message: 'Hello from server!' });
});
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
export default server;
