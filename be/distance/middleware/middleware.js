import { JWT_SECRET } from "../config.js";
import jwt, {} from "jsonwebtoken";
export function middleware(req, res, next) {
    // const token = req.headers['Authorization'];
    const token = req.get('Authorization');
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (decoded) {
            req.userId = decoded.userId;
            next();
        }
    }
    catch (e) {
        res.status(401).json({
            error: e.message
        });
    }
}
//# sourceMappingURL=middleware.js.map