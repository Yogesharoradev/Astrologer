import Astrologer from '../models/astrologers.model.js';

let lastAssignedIndex = 0; 

export const distributeUsers = async (users) => {
    try {
        
        const astrologers = await Astrologer.find({});

        const topAstrologers = astrologers.filter(a => a.topAstrologer);
        const regularAstrologers = astrologers.filter(a => !a.topAstrologer);

        const allAstrologers = [...topAstrologers, ...regularAstrologers];

        for (const user of users) {
            let selectedAstrologer;

            const sameMultiplier = allAstrologers.every(a => a.flowMultiplier === allAstrologers[0].flowMultiplier);

            if (sameMultiplier) {
                
                selectedAstrologer = allAstrologers[lastAssignedIndex];
                
                lastAssignedIndex = (lastAssignedIndex + 1) % allAstrologers.length;
            } else {

                selectedAstrologer = allAstrologers[0]; 

                
                for (const astrologer of allAstrologers) {
                    const effectiveConnections = astrologer.currentConnections / astrologer.flowMultiplier;
                    const selectedEffectiveConnections = selectedAstrologer.currentConnections / selectedAstrologer.flowMultiplier;

                    if (effectiveConnections < selectedEffectiveConnections) {
                        selectedAstrologer = astrologer;
                    }
                }
            }

            
            user.connection = selectedAstrologer._id;
            selectedAstrologer.currentConnections += 1; 
        }

        
        await Promise.all(users.map(user => user.save()));
        
        await Promise.all(astrologers.map(ast => ast.save()));
    } catch (error) {
        throw new Error(`Error distributing users: ${error.message}`);
    }
};

