import React from "react"

import { Cross } from "../icons/crossIcon"
import { Button } from "./Button"
import { CopyIcon } from "../icons/copyIcon"
import axios from "axios"

  /*

 interface sharemodelProps {
   open : boolean,
   onClose :  () => {} ;
 }

 */

 // { open , onClose }


 export function Sharemodel({open,onClose}){
 
  async function getSharelink() {

      try {

  await axios.post('http://localhost:3000/api/v1/brain/share', {

    share : true       
  
  } , {

headers : {

  "Authorization" : localStorage.getItem( 'token' )

  }}).then( (response) => localStorage.setItem( 'hash' , response.data.hash ))

    
    // navigator.clipboard.writeText(response.data.hash); 
    
    // set the hash in localStorage

  }

catch(e : any) {

  console.log(e.message)

 }

}

return  <div>

  { open && <div>

     <div className = "bg-slate-600 opacity-40 fixed top-0 left-0 w-screen h-screen flex flex-col justify-center">   
        
        </div>

     <div className = "opacity-100 fixed top-0 left-0 w-screen h-screen flex flex-col justify-center">
        
         <div className = "bg-white opacity-100 flex flex-col justify-center ml-130  w-120 h-60 rounded rounded-xl ">

      <div id = 'header' className="py-3 px-3 text-2xl font-bold flex justify-around">

        <div className = "text-3xl font-bold ">
        
            Share Your Second Brain
        
        </div>

          <div className="pt-2 hover:text-red-600" onClick = {() => onClose( (prev) =>  !prev )} >    
             <Cross />
          </div>

        </div>
        <div id = 'body' className="flex flex-col text-md justify-center pl-15 ">

          <div>
            
             Share your entire collection of notes , documents,

          </div>

          <div>           
            tweets and videos with others. They will be able to 
          </div>

           <div>
            import your content into their own second brain 
          </div>

          </div>

        <div className = "flex justify-center pt-3">


        <Button  onClick={() => { 
                       
             getSharelink()

        }} startIcon = { <CopyIcon/> }  text = "Share Brain" size = 'lg' variant ="primary" />
        
        </div>

        </div> 

  </div> 

   </div>  }

    </div>

}