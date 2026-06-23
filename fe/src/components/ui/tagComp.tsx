import React from "react"


interface tagInterface {    
  tag : string
}




export function Tag(props : tagInterface) {
  

return <div className="p-1 bg-purple-100 text-blue-500 hover:text-blue-600 max-w-25 min-w-19 h-7 flex flex-row justify-center rounded rounded-2xl ">

        <div className = "flex flex-col justify-center text-sm " >

          <div className = " flex" >
          
          <div className = "pr-1">
            #
            </div>
            
             {props.tag}

          </div>

          

        </div>
    
    </div>

}