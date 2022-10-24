/** @format */

import express from 'express';
import { getTramites, getTramiteById, addTramite } from '../controllers/tramites.controller';

const router = express.Router();

router.get('/Tramites', getTramites);
router.get('/Tramites/:id', getTramiteById);
router.post('/Tramites', addTramite);
