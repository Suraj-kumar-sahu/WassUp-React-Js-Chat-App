import React from 'react'
import attach from "../img/attach.png"
import add from "../img/add-image.png"

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type Something....'/>
      <div className="send">
        <img src={add} alt="" />
        <input type="file" style={{display:"none"}} id='file'/>
        <label htmlFor="file">
          <img src={attach} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
