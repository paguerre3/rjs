import { useEffect, useState } from 'react'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  function handleToggleModal() {
    setShowModal(!showModal)
  }

  useEffect(() => {
    async function fetchApiData() {
      const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod?' + `api_key=${NASA_API_KEY}`

      localStorage.clear()
      // cached data
      const today = new Date().toDateString()
      const localCacheKey = `nasa-cache-key-${today}`
      const cacheItem = localStorage.getItem(localCacheKey)
      if (cacheItem) {
        const cachedData = JSON.parse(cacheItem)
        setData(cachedData)
        console.log('Fetched Cache DATA:' + localCacheKey + '\n', cachedData)
        return
      }
      localStorage.clear()

      try {
        console.log('URL:', url)
        const res = await fetch (url)
        const apiData = await res.json()
        localStorage.setItem(localCacheKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetched API DATA:' + localCacheKey + '\n' , apiData)
      } catch (error) {
        console.error(error)
      }
    }
    fetchApiData()
  }, []) // empty array dependency means render only once on mount (page load)
  return (
    <>
      { data ? <Main data={data} /> : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      { showModal && <SideBar data={data} handleToggleModal={handleToggleModal}/> }
      { data && <Footer data={data} handleToggleModal={handleToggleModal}/> }
    </>
  )
}

export default App
