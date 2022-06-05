import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title : String,
    message : String,
    name: String,
    creator : String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    comments: { type: [String], default: []},
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

// sending mongoose model from a postMessage file
// and on that model we will use CRUD later... 
export default PostMessage;

