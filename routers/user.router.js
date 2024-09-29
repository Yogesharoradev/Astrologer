import express from 'express';
import { createUser } from '../controller/user.controller.js';
import { findAstrologerForUser } from "../controller/user.controller.js"

const router = express.Router();

router.post('/', createUser);

router.post("findAstrologer" , findAstrologerForUser)

router.post('/distribute-users', async (req, res) => {
  try {
      const users = req.body.users; 

      await distributeUsers(users);

      res.status(200).json({ message: 'Users distributed successfully' });
      
  } catch (error) {
      res.status(500).json({ message: 'Error distributing users', error });
  }
});


export default router;
