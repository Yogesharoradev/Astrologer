import express from 'express';
import { assignUserEndpoint, createUser } from '../controller/user.controller.js';
import { findAstrologerForUser } from "../controller/user.controller.js"
 
const router = express.Router();

router.post('/', createUser);

router.post("/findAstrologer" , findAstrologerForUser)


router.post('/assign-user', assignUserEndpoint);



export default router;
