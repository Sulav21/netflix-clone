import React from 'react'
import { Nav } from './Nav'
import './profileScreen.css'
import { useSelector } from 'react-redux'
import { auth } from './firebaseAuth'
import { PlanScreen } from './PlanScreen'

export const ProfileScreen = () => {
    const {user} = useSelector(state=>state.user)
  return (
    <div className="profileScreen">
        <Nav/>
        <div className="profileScreen_body">
            <h1>Edit Profile</h1>
            <div className="profileScreen_info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                <div className="profileScreen_details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen_plans">
                        <h3>Plans</h3>
                        <PlanScreen />
                        <button className='profile_signout' onClick={()=>auth.signOut()}>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
