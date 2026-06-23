import mongoose from "mongoose";
import { string } from "zod";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const User = new Schema({
    username: { type: String, required: true, unique: true, sparse: true },
    password: { type: String, required: true }
});
const contentTypes = ['image', 'audio', 'video', 'article'];
const Content = new Schema({
    link: String,
    type: { type: String, enum: contentTypes, required: true },
    title: { type: String, required: true },
    tags: { type: [ObjectId], ref: 'tags' },
    userId: { type: ObjectId, ref: 'users', required: true }
});
const Tag = new Schema({
    title: { type: String, required: true, unique: true }
});
const Link = new Schema({
    hash: { type: String, required: true },
    userId: { type: ObjectId, ref: 'users', required: true }
});
const userModel = mongoose.model("users", User);
const contentModel = mongoose.model("content", Content);
const tagModel = mongoose.model("tags", Tag);
const linkModel = mongoose.model("links", Link);
export { userModel, contentModel, tagModel, linkModel };
//# sourceMappingURL=db.js.map