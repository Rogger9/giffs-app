import { API_key, API_url } from './settingsAPI'

const getTrendingTerms = async () => {
  const url = `${API_url}/trending/searches?api_key=${API_key}`
  const res = await fetch(url)
  const resJson = await res.json()
  const { data } = resJson
  return data
}

export default getTrendingTerms