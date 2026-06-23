
import { JWT_SECRET } from "../config.js";
import jwt, { type JwtPayload } from "jsonwebtoken";

export function middleware(req : any , res : any , next : any ) {

    // const token = req.headers['Authorization'];
    const token = req.get('Authorization');

    try {

       const decoded = jwt.verify(token,JWT_SECRET) as JwtPayload;
       
       if(decoded) {
         req.userId = decoded.userId;

       next();
          

       }


    }

  catch(e : any ) {

   res.status(401).json({          
         
    error : e.message

 })

    }

} 

