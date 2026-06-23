import React from "react"

import { BrainIcon } from "../icons/brainIcon"
import { TweetIcon } from "../icons/tweetIcon"
import { YoutubeIcon } from "../icons/youtubeIcon"
import { DocumentIcon } from "../icons/documentIcon"
import { LinkIcon } from "../icons/linkIcon"
import { HashtagIcon } from "../icons/hashtagIcon"



export function SideBar() {
    
     return <div className = " bg-white w-80 h-screen fixed top-0 left-0 border border-r-2 border-slate-300">

        <div>

            <div id = 'logo' className="flex justify-around w-60" >

                <div className="text-purple-700 ">
                    
                    <BrainIcon/>

                </div>

                <div className=" text-2xl pt-3 font-bold">
                     Second Brain
                </div>

            </div>

            <div id = 'format' className = "flex flex-col justify-start pt-20">

                <Sidecomp text = "twitter"  icon = { <TweetIcon/>   }/>
                <Sidecomp text = "Youtube"  icon = { <YoutubeIcon/> }/>
                <Sidecomp text = "Documents"  icon = { <DocumentIcon/> }/>
                <Sidecomp text = "Links"  icon = { <LinkIcon/> }/>
                <Sidecomp text = "Tags"  icon = { <HashtagIcon/> }/>



            </div>

        </div>


        
     </div>

 }

 function Sidecomp({icon , text}){
     
   return <div className = "flex  justify-between w-30 h-9 ml-10 text-xl py-8 hover:text-blue-700 cursor-pointer">

        <div className = "pt-2">
            {icon}
        </div>

        <div>
            {text}
        </div>

     </div>
 }