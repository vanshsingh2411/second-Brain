import React from "react";

import type { ReactElement } from "react"

interface barItemInterface {
    icon : ReactElement
    text : string
    onClick? : () => void;
 }




export function SidebarItem( props : barItemInterface ) {


    
  return <div className="px-2">
           
           <div  className = "flex flex-row w-20 h-9 justify-between" >
           
           <div className= "mr-2 flex flex-col justify-center">
            {props.icon}
           </div>

            <div className = "text-gray-500 flex flex-col justify-center">
               {props.text}
            </div>

             
           </div>

  </div>
     


}