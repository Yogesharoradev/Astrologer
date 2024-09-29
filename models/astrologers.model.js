import mongoose from 'mongoose';

const astrologerSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
     },
    topAstrologer: {
         type: Boolean, 
         default: false 
        },
    currentConnections: {
         type: Number,
          default: 0
         },
    maxConnections: { 
        type: Number, 
        default: 10
    }, 
    flowMultiplier: { 
        type: String,
         enum: ['0.5', '1', '1.5', '2'], 
         default: 1 
    },
} , {timestamps : true});

const Astrologer = mongoose.model('Astrologer', astrologerSchema);

export default Astrologer;
