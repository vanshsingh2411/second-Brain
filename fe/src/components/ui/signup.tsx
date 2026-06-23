import React from "react"
import { useState , useRef } from "react"
import axios  from "axios";
import { useNavigate } from "react-router-dom";


export  function Signup(){

   const usernameRef  = useRef<HTMLInputElement>(null);
    
   const passwordRef = useRef<HTMLInputElement>(null);

   const navigate = useNavigate();

   async function signup(){
        
       const username = usernameRef.current?.value;
       const password = passwordRef.current?.value;

      await  axios.post( 'http://localhost:3000/api/v1/auth/signup' , {
         
           username : username,
           password : password
           
          }).then( () => navigate('/signin')).catch(() => navigate('/error')) 

    }


    return <div className = "bg-slate-400 w-screen h-screen flex flex-col justify-center">

   <div className = "bg-white w-130 h-120  ml-130  border border-xl rounded rounded-xl" >    
      
      <div className = "flex flex-row justify-center text-5xl" >
        signup 
      </div> 

      <div className = "mt-1.5 flex flex-col justify-center ml-10">
        
         <h2 className = "text-3xl m-3"> username  </h2>

         <input ref = {usernameRef} type = 'text' className = "pl-5 border border-l w-100 h-12 rounded-xl text-2xl"  placeholder = "abc"/> 
      
      </div>

      <div className = "mt-1.5 flex flex-col justify-center ml-10">
         <h2 className = "text-3xl m-3" > password </h2>
         
     <input ref = {passwordRef} type = 'text' className = "pl-5 border border-l w-100 h-12 rounded-xl text-2xl"  placeholder = "12345" />
     
     </div>

 <button onClick={() => { 

  signup();

 }} className = " text-xl mt-7 ml-10 border border-xl w-100 h-10 bg-lime-300  hover:bg-lime-500 rounded rounded-2xl"> signup </button>


 <div className = "flex  py-15 px-30  items-center"> 
       
    Already Signed Up? 


  <div className = "text-blue-400 hover:text-blue-600 px-5" onClick = { () => {
          navigate('/signin')
    }}>

       Signin
 
    </div>

 </div>

   </div>
  </div>

}