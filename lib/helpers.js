import Astrologer from '../models/astrologers.model.js';


export const assignUserToAstrologer = async (user) => {
    try {
    
        const astrologers = await Astrologer.find({});

        if (astrologers.length === 0) {
            throw new Error('No astrologers available');
        }

        
        let selectedAstrologer = astrologers[0];

        for (const astrologer of astrologers) {
            const effectiveConnections = astrologer.currentConnections / astrologer.flowMultiplier;
            const selectedEffectiveConnections = selectedAstrologer.currentConnections / selectedAstrologer.flowMultiplier;

            if (effectiveConnections < selectedEffectiveConnections) {
                selectedAstrologer = astrologer;
            }
        }

    
        user.connection = selectedAstrologer._id;
        selectedAstrologer.currentConnections += 1;

        await user.save();
        await selectedAstrologer.save();

        return selectedAstrologer;
    } catch (error) {
        throw new Error(`Error assigning user: ${error.message}`);
    }
};
