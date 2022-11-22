import mongoose from 'mongoose';

const {Schema} = mongoose;

const Product = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    ingredients: {
        required: true,
        type: [{
            name: {
                type: String,
                required: true
            },
            icon: {
                type: String,
                required: true
            },
        }],
    },
    category: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Category',
    },
});

export default mongoose.model('Product', Product);
