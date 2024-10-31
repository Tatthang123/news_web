import mongoose from "mongoose"
const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    contents: {
        type: String,
        required: true, // Bắt buộc
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    image: {
        type: String
    },
    views: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
},
    {
        timestamps: true
    }
)
const Article = mongoose.model('Article', articleSchema);
export default Article
