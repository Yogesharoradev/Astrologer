import  {assignUserToAstrologer}  from '../lib/helpers.js';
import Astrologer from '../models/astrologers.model.js';
import User from '../models/user.model.js';

export const createUser = async (req, res) => {
try {
  const { name } = req.body;
  
    const newUser = new User({ name });

    await newUser.save();

    res.status(201).json(newUser);
    
  } catch (error) {
    res.status(500).json({ message: 'Failed to create user', error });
  }
};


export const findAstrologerForUser = async (req, res) => {
  const { userId } = req.body;  

  try {
      
      const user = await User.findById(userId);
      if (!user) return res.status(404).json({ message: 'User not found' });

     
      const astrologers = await Astrologer.find({});

      let assignedAstrologer = astrologers[0];
      for (const astrologer of astrologers) {
          if (astrologer.currentConnections < assignedAstrologer.currentConnections) {
              assignedAstrologer = astrologer;
          }
      }

      user.connection = assignedAstrologer._id;

      assignedAstrologer.currentConnections += 1;

      await user.save();
      await assignedAstrologer.save();

      res.status(200).json({ user, assignedAstrologer });
      
  } catch (error) {
      res.status(500).json({ message: 'Error finding astrologer for user', error });
  }
};


export const assignUserEndpoint = async (req, res) => {
  try {
      const { userId } = req.body;

      if (!userId) {
          return res.status(400).json({ message: 'User ID is required' });
      }

      const user = await User.findById(userId);

      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      const assignedAstrologer = await assignUserToAstrologer(user);

      res.status(200).json({ message: 'User assigned successfully', astrologer: assignedAstrologer });
  } catch (error) {
      res.status(500).json({ message: 'Failed to assign user', error: error.message });
  }
};
