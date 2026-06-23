import React from "react"

import { useState , useRef } from "react"
import { Cross } from "../icons/crossIcon";
import { Button } from "./Button";
import axios from "axios";

// @ts-ignore


 enum  ContentType {
     Youtube = 'youtube',
     Twitter = 'twitter' 
}


export function ContentModel( { open , onClose  } ) {

  //  const [title , setTitle] = useState('');
  //  const [link , setLink] = useState('');
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef =  useRef<HTMLInputElement>(null);
  const [type , setType] = useState('youtube');


     async function addContent() {

      
            const title = titleRef.current?.value;
            const link = linkRef.current?.value;

            if(title == null){
                titleRef.current?.focus();
            }

          else if(link == null) {

                linkRef.current?.focus()
          
               }
             
          else {  

         await axios.post('http://localhost:3000/api/v1/content/' , {

                 title : title,
                 link : link,
                 type :  type == 'youtube' ? 'video' : 'article' 
               },
                
            {     
               headers : {
                  "Authorization" : localStorage.getItem('token')
               }

            }).then(() => { console.log('created content') 
                 
                onClose( (prev) => !prev)

            }).catch( (e) => {console.log( e.message )});


         }  

   }

  return <div>  { open && <div>
   <div className = "bg-gray-500 opacity-60 h-screen w-screen fixed top-0 left-0 flex flex justify-center" > 
                         
                         </div>
        
         <div className = "h-screen w-screen fixed top-0 left-0 flex flex justify-center" > 
                         

           <div className = "bg-white opacity-100 bg-opacity-100 w-80 h-80 mt-60 rounded rounded-2xl flex flex-col justify-around">

               <div className = "text-2xl font-bold flex justify-around py-3">

                  <div className = "pl-10">
                       
                       Add content

                  </div>

                  <div onClick={ () => {  
                     
                     onClose( (prev) => !prev);

                        
                        
                  }} className = "pt-1 hover:text-red-600">
                     
                     <Cross/>

                     </div>

               </div>

            <div className = "flex flex-col justify-start px-4 py-3 h-full">

               <Input placeholder={'Title'} reference = {titleRef}/>

               <Input placeholder={'Link'} reference = {linkRef} />

               
               <div className="flex flex-row justify-around w-full h-10 mt-3">

              <Button text="Youtube" variant= {type == 'youtube' ? 'primary' : 'secondary' } size="md" onClick={()=>{

                 setType(ContentType.Youtube);

              }} />

      <Button text="Twitter" variant= {type == 'twitter' ? 'primary' : 'secondary' } size="md" onClick={()=>{

               setType(ContentType.Twitter);
                        
     }} />

            </div>


  

                
            </div>


         <div className = "flex justify-center py-3">
      
         <button className = "h-10 w-70 bg-lime-400  hover:bg-lime-600 py-2 px-2 rounded rounded-2xl font-bold text-lg"  onClick = {() => {
                 
                 addContent();
            
              }}> Add  </button>

              </div>

         </div>

         </div>

         
           
      </div> }

   </div>
}

function Input({placeholder , reference }){
     
    return <div className = "py-2">
         
         
         <input ref={reference} placeholder= {placeholder}  className = "w-70 h-10 rounded rounded-2xl py-2 px-4 border border-black " />


    </div>
}



/*

 <input onChange={(e) => {
                    setTitle(e.target.value);
                 }} placeholder = 'title'  className = "w-70 h-10 rounded  border border-xl rounded-ml my-2 px-4"/>

                 <input onChange={(e) => {

                  setLink(e.target.value)
                 }} placeholder = 'link'  className = "w-70 h-10 rounded border border-xl rounded-ml my-2 px-4"/>

                 <input onChange={(e) => {

                  setType(e.target.value)

                 }} placeholder = 'type'  className = "w-70 h-10 rounded border border-xl rounded-ml my-2 px-4"/>


*/
