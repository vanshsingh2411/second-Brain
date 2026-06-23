import express from 'express';
import jwt from 'jsonwebtoken';
import { userModel } from '../db/db.js';
import bcrypt from 'bcrypt';
import { authSchema } from '../zod/schema.js';
import { JWT_SECRET } from '../config.js';
const Authrouter = express.Router();
Authrouter.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        /*
          const parsed = authSchema.safeParse({
          
               username,
               password
         
           })
           
        
           if(!parsed.success (
                res.status(403).json({
        
                 error : 'invalid format of credentials'
        
              })
           )
          */
        if (!username || !password) {
            res.json({
                message: "invalid creadentials fron signup"
            });
        }
        // @ts-ignore
        const hashedPw = bcrypt.hash(password, 5);
        const userdb = await userModel.create({
            username: username,
            password: password
        });
        res.status(200).json({
            message: 'signed up'
        });
    }
    catch (e) {
        res.status(403).json({
            error: e.message
        });
    }
});
Authrouter.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        /*
               const parsed = authSchema.safeParse({
            username,
             password
         })
      
         if(!parsed.success)(
      
              res.status(403).json({
      
               error : 'invalid format of credentials'
            
              })
         )
              */
        const userdb = await userModel.findOne({
            username
        });
        if (userdb) {
            const token = jwt.sign({ userId: userdb._id }, JWT_SECRET);
            res.json({
                message: 'signed in',
                token: token
            });
        }
    }
    catch (e) {
        res.status(401).json({
            error: e.message
        });
    }
});
export default Authrouter;
//# sourceMappingURL=auth.js.map