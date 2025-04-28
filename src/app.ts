import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import { logger } from './utils/logger';
import { errorHandler } from './middlewares/errorHandler';
import compressRoutes from './routes/compress';
import cors from 'cors';

dotenv.config();

const app: Application = express();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger middleware
app.use((req: Request, res: Response, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/api', compressRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;