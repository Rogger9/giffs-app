import { useGifs } from '../hooks/useGifs'
import FormSearch from './FormSearch'
import ListOfGifs from './ListOfGifs'
import LazyTrending from './LazyTrending'
import '../styles/Home.css'

const Home = () => {
  const { gifs } = useGifs()
  return <>
    <FormSearch />
    <h2 className="titlePopularGifs">Última búsqueda</h2>
    <ListOfGifs gifs={gifs}/>
    <LazyTrending />
  </>
}

export default Home