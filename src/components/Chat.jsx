import React from 'react'
import add from "../img/add_user.png"
import more from "../img/more.png"
import cam from "../img/cam.png"
import Messages from './Messages'
import Input from './Input'


const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Bikash</span>
        <div className="chatIcons">
          <img src={cam} alt="cam" />
          <img src={add} alt="add" />
          <img src={more} alt="more" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
