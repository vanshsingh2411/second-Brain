
import React, { useEffect } from "react" 

import { useState } from "react";
import axios from "axios";



export function useContent(){
     
  const[content , setContent] = useState([]);

  useEffect(()=> {

    async function getContent(){
         
      const response =  await axios.get('http://localhost:3000/content' , {
          headers : {
            "Authorization" : localStorage.getItem('token')
          }
      })
         setContent(response.data.token);
     }

     getContent();

  },[]);


   return content;

}