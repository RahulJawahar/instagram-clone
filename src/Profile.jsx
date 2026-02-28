import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Profile() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/profile')
            .then(data => setProfile(data.data))
            .catch(err => console.log(err)) // Good practice to catch errors
    }, [])
    function HandleOnChange(e){
        setProfile(prev => ({
            ...prev,
            [e.target.name]: e.target.value

        }))
    }
    const handleUpdate= async()=>{
        axios.put('http://localhost:3000/profile',profile)
        .then(console.log("Updated"))
        .catch(err => console.log(err))
    }

    return (
        <div className='m-5'>
            {profile ? (
                <div>
                    
                    <img src={profile.profile_pic} className="profile rounded-circle" alt="" />
                    
                    
                    <h5>{profile.username}</h5> 
                    <input type="text"
                           value={profile.username}
                           name="username"
                           className='form-control my-4'
                           onChange={HandleOnChange}
                    /><input type="text"
                             name="profile_pic"
                             value={profile.profile_pic}
                             className='form-control'
                             onChange={HandleOnChange}
                    />
                    <button onClick={handleUpdate} className='btn btn-primary my-4'>
                        Update
                    </button>
                    
                    
                
                </div>
            ) : (
                <div>Loading Profile</div>
            )}
        </div>
    )
}

export default Profile