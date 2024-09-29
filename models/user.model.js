import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    connection: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'Astrologer',
         default : null
     },
}, {timestamps :true });

const User = mongoose.model('User', userSchema);

export default User;
