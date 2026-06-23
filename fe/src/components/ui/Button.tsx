import React, { type ReactElement } from "react";
import { PlusIcon } from "../icons/PlusIcon";



export interface ButtonInterface {

   variant : "primary" | "secondary" ,
   size : "sm" | "md" | "lg" ,
   text : string,
   startIcon? : ReactElement,
   endIcon? : ReactElement,
   onClick? : () => void

}


const variantStyles = { 

   "primary": "bg-purple-600 text-white flex flex-row  hover:bg-purple-700 ",
   "secondary" : "bg-purple-200 text-purple-600 flex flex-row  hover:bg-purple-300 hover:text-purple-700"

} 


 const sizeStyles = {

   "sm" : "px-2 py-1 text-sm rounded-sm ",  
   "md" : "px-5 py-2 text-md rounded-md",
   "lg" : "px-7 py-3 text-lg rounded-lg"
  
  }
 


// props : ButtonProps


 export const Button =  ( props : ButtonInterface ) => {

   return <div>       
        <button onClick={ props.onClick} className = {sizeStyles[props.size] + " " + variantStyles[props.variant]  } >
               
               <div className="pr-2 flex flex-col justify-center">
                   {props.startIcon}
               </div>

              {props.text}
              
              <div className="pl-2">
              
                { props.endIcon }
              
              </div>

        </button>
   </div>

}
