import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'

function App() {
  //sates
  const [page,setPage] = useState(0)  //page number
  const [followers,setFollowers] = useState([])  //all of 100 followers

  //bring loading and data states from useFetch to here--destructuring
  const{loading,apiData} = useFetch()

  useEffect(()=>{
    if(!loading){  //the point is add loading here otherwise because at first it takes time for api to send the data it will be undefined and can not map over the undefined
      return setFollowers(apiData[page])  //10 arrays of 10
    }else{return}
  },[loading,page])

  const nextPage = () =>{
    //inside the setPage there will be a call back function
    setPage((currentPage) =>{  //currentpage can be 0-9
      let nextPage = currentPage+1
      console.log(nextPage)
      console.log(apiData.length-1)
      if(nextPage > apiData.length-1){  //end of pages--nextpage will be 10
        nextPage = 0
      }
      //anyway we should return nextPage so we should not return the nextPage inside else
      return nextPage  //otherwise go to the nextPage
      
    })
  }

  const prevPage = () =>{
    setPage((currentPage)=>{
      let prevPage = currentPage-1
      console.log(prevPage)
      if(prevPage < 0){
        prevPage = 9
      }
      return prevPage
    })
  }
  
  //when user click on each page number without using "Next" and "Prev" buttons
  const handlePage = (i) =>{
    return setPage(i)
  }

  return(
    <main>
      <div className='section-title'>
          <h1>pagination</h1>
          <div className='underline'></div>
      </div>

      <section className='followers'>
        <div className='container'>
          {!loading && followers.map((follower)=>{  //the loading condition must be added here
            return <Follower key={follower.id} {...follower}/>
          })}
        </div>

        {!loading && (<div className='btn-container'>
          <button className='prev-btn' onClick={prevPage}>prev</button>
          {apiData.map((item,index)=>{  //index= 0 at first--we must use item otherwise not going to work
          return (<button key={index} className={`page-btn ${page===index ? "active-btn" : null }`} onClick={()=>handlePage(index)}>{index+1}</button>
          )
          })}
          <button className='next-btn' onClick={nextPage}>next</button>
        </div>
        )}
      </section>
    </main>
  )
}

export default App
