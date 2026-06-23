
import express from 'express'
import { random } from '../db/utils.js';
import { contentModel, linkModel, userModel } from '../db/db.js';
import e from 'express';
import { middleware } from '../middleware/middleware.js';

const brainrouter = express.Router();


 brainrouter.post('/share',middleware,async (req,res) => { 

   const share = req.body.share;

   // @ts-ignore
   const userId = req.userId

   if(share) {

    const existingLink = await linkModel.findOne({
             
          userId : userId
            
      })

      if(existingLink) {

         res.json({  
              hash : existingLink.hash
         })

         return;
      }

      const hash = random(10);
       
      await linkModel.create({
          userId ,
          hash
      })


      res.json({
         hash
      })

   }

   else {
      
       await linkModel.deleteOne({
        
        userId 
      
    })


    res.json({
   
      message : 'removed link'
   
    })
     
   }



      

 })



 brainrouter.get('/' , async ( req , res ) => { 

   // const shareLink = req.params.shareLink;
    
    const shareLink = req.body.shareLink ;


    console.log(shareLink);
 
    try {
         
      const link = await linkModel.findOne({             
      
         hash : shareLink
      
      })


   if(!link) {

   res.json({     
      message : 'sorry incorrect input'
   })

   return ;

 }
     
  const content = await contentModel.findOne({    
      userId :  link.userId
   })

   const user = await userModel.findOne({
      userid : link.userId
   })


   res.json({
      username:  user?.username,
      content :  content
   })

  }

  catch(e:any) {

   res.json({  
      error : e.message  
   })
  
   }   

 
})

 export default brainrouter;
 