import React , {useEffect, useState} from 'react'

import './App.css'

import { PlusIcon } from './components/icons/PlusIcon';
import { TweetIcon } from './components/icons/tweetIcon';
import { VideoIcon } from './components/icons/videoIcon';
import { LinkIcon } from './components/icons/linkIcon';
import { SidebarItem } from './components/ui/sidebarItem';
import { DocumentIcon } from './components/icons/documentIcon'
import { Tag } from './components/ui/tagComp';
import { Link } from 'react-router-dom';
import { ErrorPage } from './components/ui/error';

import { Button } from './components/ui/Button'
import { Signup } from './components/ui/signup'
import { Signin } from './components/ui/signin'
import { Card } from './components/ui/card'

import { ContentModel } from './components/ui/createContentmodel';
import { BrowserRouter , Route , Routes } from 'react-router-dom'; 
import { ShareIcon } from './components/icons/shareIcon';
import { Sharemodel } from './components/ui/shareBrainModel'
import { SideBar } from './components/ui/sideBar'; 
import { useContent } from './components/hooks/useContent';
import axios from 'axios';



 function App() {


    return  ( <BrowserRouter>
    
        <Routes>

          <Route path='/' element = { <Signup/> } />

          <Route path='/home' element = { <Home/> } />

          <Route path='/signin' element = { <Signin/> }/>

          <Route path='*' element = { <ErrorPage/> } />

        </Routes>
    
    </BrowserRouter> ) 


}


let idx : number = 0 ;


 function Home() {

   const [openAdd,onCloseAdd] = useState(false); 
   const [openShare,onCloseShare] = useState(false);
   const [content , setContent] = useState<any>([]);
     
 async function getcontent() {


  try {

    const response = axios.get('http://localhost:3000/api/v1/content/', {

    headers : {
    
      'Authorization' : localStorage.getItem('token')
    
    }

})

    console.log((await response).data);
              // @ts-ignore
       setContent(response.data.content);
   
  } 
  
   catch(e : any) {
       console.log(e.message)
   }

  }


  useEffect( () => {

    getcontent();

  } , []);


   /*
   const {content} = useContent();

   useEffect( ()=> {

   } , [openAdd] )

  */
 
 return ( <div>

    <SideBar/>          

          <div className='bg-slate-100 w-280 h-screen  ml-80' >

          <div id = 'header' className = 'flex flex justify-between px-7 py-4'> 
            
            <div className='text-3xl text-black font-bold'>
    
               All Notes
    
            </div>
        
            <div className = 'flex flex-row justify-between w-110'> 

            <Button onClick = { () => {            
                    
                  onCloseShare( prev => !prev)

              }} startIcon = { <ShareIcon/> } variant = 'secondary' text = 'Share Brain' size = 'lg'/>
            
         <Button onClick={ () => {

                  onCloseAdd(prev => !prev);
            
            }} startIcon = {<PlusIcon/>} variant='primary' text='Add Content' size='lg' />

            </div>

          </div> 

          <div  id='content div' className = 'flex  flex-row flex-wrap '>

            { content?.map((c) => <div key = { c._id } >

                   <Card title = {c.title}  type = {c.type} link = {c.link} />

              </div> )}

          </div>

          <ContentModel  open = {openAdd}  onClose = {onCloseAdd} />

          <Sharemodel  open={openShare} onClose={onCloseShare}/>

       </div>

  </div>

)}

export default App;





      //    <Card title = 'projects' type='youtube' link = {'https://www.youtube.com/embed/EkZlFPhMB4E?si=cWdghxtTP7yk_h01'} />

      //    <Card title = 'projects' type='twitter' link = {'https://twitter.com/takeUforward_/status/2008746731492839750'} />
        