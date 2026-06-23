import React from "react"

import { VideoIcon } from "../icons/videoIcon"
import { ShareIcon } from "../icons/shareIcon"
import { DeleteIcon } from "../icons/deleteIcon"
import { Tag } from "./tagComp"

interface cardProps  {
    title : string,
    link : string,
    type : 'youtube'|'twitter'
}


export function Card( props : cardProps) {

   const date = new Date();


   function deleteContent() {







      
   }


    return <div className="p-10">      
    
          <div  className= "flex flex-col justify-start max-w-72 border border-slate-300  shadow-sm rounded rounded-xl">  
              <div id = 'header' className= " flex justify-between pt-2">
  
                  <div className = "flex justify-between px-2">

                     <div className="pr-2">
                        
                        <VideoIcon/>

                     </div> 

                     <div className = "font-bold">

                         {props.title}
                         
                     </div>

                  </div>                 

                 <div className = "flex justify-between px-2 text-gray-500" >
                     
                    <div className = "pr-2 hover:text-gray-700">
                    
                    <ShareIcon/>
                    
                    </div>
                   
                    <div onClick={()=> {

                         deleteContent();
                    }} className = "hover:text-gray-700" >

                      <DeleteIcon/>

                    </div>

                 </div>

              </div>

           <div id = 'title' className = "pt-4 text-xl font-bold flex justify-start px-3">
                
             { props.title }

          </div>

        <div id = 'body' className = "p-2 w-full h-auto flex flex-wrap" >

      { props.type == 'youtube' &&   <iframe className="w-full h-full " src = {props.link.replace("watch","embed").replace("?v=" , "/")} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> }            


        { props.type == 'twitter' && <blockquote className = "twitter-tweet" >

                    <a href={props.link.replace("x.com", "twitter.com")}></a>

                </blockquote> }

         </div>
        
            <div id = 'tags' className = "flex justify-around">  

               <Tag  tag = "productivity"/>     

               <Tag  tag = "ideas"/>     

        
         </div>

    <div id = 'dateAdded' className = "flex flex-row justify-center py-2">

       <div>

       Added on :  { date.getDate()}/ {date.getMonth()+1} / {date.getFullYear()}   

       </div>
  
   
    </div>
    
      </div>
    

    </div>

 }

        // <iframe className="w-full h-full " src="https://www.youtube.com/embed/EkZlFPhMB4E?si=cWdghxtTP7yk_h01" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
       //     <blockquote className="twitter-tweet">
       
     // <a href="https://twitter.com/sama/status/2001724828567400700"></a> 
   //     </blockquote>


   // https://twitter.com/takeUforward_/status/2008746731492839750