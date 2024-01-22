import express from 'express';
import http from 'http';
import { Server as SocketServer, Socket } from 'socket.io';
import cors from 'cors';
import { Pool } from 'pg';

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server);

const pool = new Pool({
  user: 'jmlopezzu',
  host: 'localhost',
  database: 'azen',
  password: 'pgadminCUPqRyAZ1',
  port: 5432,
});

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
);

app.use(express.json());

io.on('connection', (socket: Socket) => {
  console.log('A user connected');

  socket.on('formSubmitted', async (data) => {
    console.log('Form submitted with data:', data);

    try {
      const { option1, option2, option3, name, saveLocation } = data;
      const query =
        'INSERT INTO public.azen1 (option1, option2, option3, name, save_location) VALUES ($1, $2, $3, $4, $5)';
      const values = [option1, option2, option3, name, saveLocation];

      await pool.query(query, values);

      socket.emit('formSubmissionResponse', { success: true });
    } catch (error: any) {
      console.error('Error saving data to PostgreSQL:', error);
      socket.emit('formSubmissionResponse', { success: false, error: error.message });
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
