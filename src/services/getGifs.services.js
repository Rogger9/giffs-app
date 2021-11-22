import { API_key, API_url } from './settingsAPI'

export const getGifs = async ({ limit = 20, keyword = 'panda', page = 0 } = {}) => {
  const url = `${API_url}/gifs/search?api_key=${API_key}&q=${keyword}&limit=${limit}&offset=${page*limit}&rating=g&lang=es`
  const res = await fetch(url)
  const resJson = await res.json()
  const { data } = resJson
  const gifs = data.map( listGifs => {
    const { id, title, images } = listGifs
    const { url, height, width } = images.fixed_width
    return { id, title, url, height, width }
  })
  return gifs
}
