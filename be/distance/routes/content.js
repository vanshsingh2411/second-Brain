import express from "express";
const Contentrouter = express.Router();
import { middleware } from "../middleware/middleware.js";
import { contentModel } from "../db/db.js";
Contentrouter.post('/', middleware, async (req, res) => {
    const link = req.body.link;
    const title = req.body.title;
    const type = req.body.type;
    // @ts-ignore
    const userId = req.userId;
    // zod validation
    try {
        const contentdb = await contentModel.create({
            link,
            title,
            type,
            userId: userId,
            tags: []
        });
        res.status(200).json({
            message: 'content added'
        });
    }
    catch (e) {
        res.json({
            message: e.message
        });
    }
});
Contentrouter.get('/', middleware, async (req, res) => {
    // @ts-ignore
    const userId = req.userId;
    try {
        const content = await contentModel.find({
            userId: userId
        });
        res.json({
            content
        });
    }
    catch (e) {
        res.status(402).json({
            message: 'unable to get content  ' + e.message
        });
    }
});
Contentrouter.delete('/', middleware, async (req, res) => {
    const contentId = req.body.contentId;
    // @ts-ignore
    const userId = req.userId;
    try {
        const contentdb = await contentModel.deleteOne({
            _id: contentId,
            userId: userId
        });
        res.json({
            message: 'deleted. ' + contentId
        });
    }
    catch (e) {
        res.status(401).json({
            message: 'failed to delete ' + e.message
        });
    }
});
export default Contentrouter;
//# sourceMappingURL=content.js.map