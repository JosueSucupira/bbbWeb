import express, { Express, Request, Response } from 'express';
import cors from 'cors'
import options from './cors'

const app: Express = express();
const SERVER_PORT = 8000

app.use(cors(options))
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.json({ message: "Beagle Bone Leds" });
});

app.get('/execCommand', (req: Request, res: Response) => {
  console.log("endpoint called")
});

app.listen(SERVER_PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${SERVER_PORT}`);
});