import React from 'react'
import u2 from "../img/u1.jpg" ;


const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
        <img src={u2} alt="" />
        <div className="userChatInfo">
        <span>Bikash</span>
        <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats
