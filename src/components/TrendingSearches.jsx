import { useEffect, useState } from 'react'
import getTrendingTerms from '../services/getTrendingTerms.services'
import Category from './Category'

const TrendingSearches = () => {
  const [trends, setTrends] = useState([])

  useEffect( async () => {
    const res = await getTrendingTerms()
    setTrends(res)
  }, [])

  return <Category name='Tendencias' options={trends} />
}

export default TrendingSearches