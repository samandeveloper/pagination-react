//each person box (image,name.view profile button) on the homepage
import React from 'react'

const Follower = ({avatar_url,login,html_url,id}) => {
  return(
    <article className='card'>
      <img src={avatar_url} alt={login}/>
      <h4>{login}</h4>
      <a href={html_url} className="btn">View profile</a>
    </article>
  )
}

export default Follower
