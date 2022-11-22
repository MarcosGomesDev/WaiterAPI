import mongoose from 'mongoose';
const {Schema} = mongoose;

const Category = new Schema({
    name: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
});
export default mongoose.model('Category', Category);
