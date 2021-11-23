import { lazy } from 'react'
import { useGifs } from '../hooks/useGifs'
import FormSearch from './FormSearch'
import LazyTrending from './LazyTrending'
import '../styles/Home.css'

const ListOfGifs = lazy(() => import('./ListOfGifs'))
const NoResultsFound = lazy(() => import('./NoResultFound'))

const Home = () => {
  const { gifs, noResultsFound } = useGifs()
  return <>
    <FormSearch />
    <h2 className="titlePopularGifs">Last search</h2>
    {
      noResultsFound
      ? <NoResultsFound keyword="latest search" />
      : <ListOfGifs gifs={gifs}/>
    }
    <LazyTrending />
  </>
}

export default Home