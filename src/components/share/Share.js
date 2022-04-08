import React from 'react'
import "./share.scss";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"



import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'



const Share = () => {



  const { user } = useContext(AuthContext)





  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className='shareProfileImg' src={user.profilePicture || "assets/person/2.jpeg"} alt="" />
          <input placeholder={"What's in your mind " + user.username + "?"} className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">

            <div className="shareOption">
              <PermMedia className='shareIcon PermMediaIcon' />
              <span className='shareOptionText'>Photo/Video</span>
            </div>


            <div className="shareOption">
              <Label className='shareIcon LabelIcon' />
              <span className='shareOptionText'>Tag</span>
            </div>

            <div className="shareOption">
              <Room className='shareIcon RoomIcon' />
              <span className='shareOptionText'>Location</span>
            </div>

            <div className="shareOption">
              <EmojiEmotions className='shareIcon EmojiEmotionsIcon' />
              <span className='shareOptionText'>Feelings</span>
            </div>
          </div>

          <button className="shareButton">Share</button>

        </div>

      </div>
    </div>
  )
}

export default Share