import express from 'express';
import routes from './routes.js';

const app = express();

//INDICAR PARA O EXPRESS LER BODY COMO JSON
app.use(express.json());

export default app;