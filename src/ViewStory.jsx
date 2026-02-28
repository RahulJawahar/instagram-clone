import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function ViewStory() {
    const { id ,tot} = useParams();
    const [story, setStory] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/story/${id}`)
            .then(res => res.json())
            .then(data => setStory(data))
            .catch(err => console.log(err))
    }, [id]);
    const navigate=useNavigate();
    if(id > tot || id<=0){
        navigate('/');
    }


    return (
        <div>
            {story ? (
                <div className='d-flex justify-content-center align-items-center'>
                    <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}><i className="bi bi-arrow-left-circle-fill"></i></Link>
                    <img className='vh-100 ' src={story.image} alt="story" style={{ width: '100%', maxWidth: '400px' }} />
                    <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><i className="bi bi-arrow-right-circle-fill"></i></Link>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}

export default ViewStory