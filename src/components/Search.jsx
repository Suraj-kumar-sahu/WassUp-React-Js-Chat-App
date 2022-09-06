import React from 'react'
import u2 from "../img/u1.jpg" ;


const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
          <input type="text" placeholder='Find a user' />
      </div>
      <div className="userChat">
        <img src={u2} alt="" />
        <div className="userChatInfo">
        <span>Bikash</span>
        </div>
      </div>
      
    </div>
  )
}

export default Search
