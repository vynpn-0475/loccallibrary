import express from 'express';
import * as dotenv from 'dotenv';
import { AppDataSource } from './config/data-source';
import authorRouter from './routes/Author.routes';
import bookRouter from './routes/Book.routes';
import bookInstanceRouter from './routes/BookInstance.routes';
import genreRouter from './routes/Genre.routes';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

AppDataSource.initialize().then(() => {
    console.log("Database connected");

    app.use('/api', authorRouter);
    app.use('/api', bookRouter);
    app.use('/api', bookInstanceRouter);
    app.use('/api', genreRouter);

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(error => {
    console.log("Database connection error:", error);
});
