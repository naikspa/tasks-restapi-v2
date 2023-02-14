import express from 'express';
import morgan from 'morgan';
import tasksRoutes from './routes/tasks.routes';
import cors from 'cors';

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.get('/', (req, res) => {
  res.send('Welcome to my aplication');
});

app.use('/api/tasks', tasksRoutes);

export default app;
