import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Stories() {
    const[Stories,setStory]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/story')
        .then(data=>data.json())
        .then(data=>setStory(data))
        .catch(err=>console.log(err))
    },[]);
    const navigate=useNavigate();
    let tot=0;
  return (
    <div className='story d-flex'>
        <div className='d-none'>
            {tot=Stories.length}

        </div>
        
        {Stories.length > 0 ?
        (
            Stories.map((story)=>(
                <div className="mx-1" key={story.id} onClick={()=>(navigate(` /story/${story.id}/${tot}`))}>
                    <div className='gradient-border'>
                        <img  className="story-dp rounded-circle"src={story.user.profile_pic} alt="dp" />
                    </div>
                   
                   <p className='text-truncate' style={{width:"50px"}}>{story.user.username}</p>


                </div>

            ))
        ):(
            <p>Loading</p>
        )}  
    </div>
  )
}

export default Stories
