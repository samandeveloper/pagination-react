//fetch data from API
import { useState, useEffect } from 'react'
import paginate from './utils'
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

export const useFetch = () => {
  const [loading, setLoading] = useState(true)   //it's better to add loading state ehrn we fetch data from api
  const [apiData, setApidata] = useState([])   

  const getProducts = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(paginate(data))
    setApidata(paginate(data))   //show the data of each page-- (10) [Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10)]
    setLoading(false)
  }
  useEffect(() => {
    getProducts()
  }, [])
  return { loading, apiData }
}
