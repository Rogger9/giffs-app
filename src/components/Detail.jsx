import { useGlobalGifs } from '../hooks/useGlobalGifs'
import Gif from './Gif'

const Detail = ({ params }) => {
  const { id } = params
  const gifs = useGlobalGifs()
  const gif = gifs.find( singlegif => singlegif.id === id )
  const { title } = gif

  return <>
    <h3 className="titleDetail">Name: {title}</h3>
    <Gif {...gif} />
  </>
}

export default Detail