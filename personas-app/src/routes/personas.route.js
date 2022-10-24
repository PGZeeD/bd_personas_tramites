/** @format */

import express from 'express';
import { getPersonas, getPersonaById, addPersona } from '../controllers/persona.controller';

const router = express.Router();

router.get('/Personas', getPersonas);
router.get('/Personas/:id', getPersonaById);
router.post('/person', addPersona);
