import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" alt="img" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" alt="img" />
        <p>Hello</p>
      </div>
    </div>
  )
}

export default Message
