/** @format */

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use('*', (_req, res) => res.status(404).send('<h1>Endpoint no encontrado</h1>'));

app.listen(port, () => console.log('TODO OK', port));
