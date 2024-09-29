import Astrologer from '../models/astrologers.model.js';


export const createAstrologer = async (req, res) => {
 
    const { name } = req.body;

  try {

    const newAstrologer = new Astrologer({ name });

    await newAstrologer.save();

    res.status(201).json(newAstrologer);

  } catch (error) {

    res.status(500).json({ message: 'Failed to create astrologer', error });

  }
};

export const toggleTopAstrologer = async (req, res) => {

  const { id } = req.params;

  try {

    const astrologer = await Astrologer.findById(id);

    if (!astrologer) return res.status(404).json({ message: 'Astrologer not found' });

    astrologer.topAstrologer = !astrologer.topAstrologer

    await astrologer.save();

    res.status(200).json(astrologer);
    
  } catch (error) {
    res.status(500).json({ message: 'Failed to toggle astrologer status', error });
  }
};



