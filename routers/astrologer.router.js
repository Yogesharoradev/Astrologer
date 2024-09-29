import express from 'express';
import { createAstrologer, toggleTopAstrologer } from '../controller/astrologer.controller.js';

const router = express.Router();


router.post('/', createAstrologer);

router.patch('/:id', toggleTopAstrologer);



export default router;
