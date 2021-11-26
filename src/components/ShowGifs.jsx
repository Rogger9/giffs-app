import { lazy, useCallback, useRef, useEffect } from 'react'
import { useGifs } from '../hooks/useGifs'
import useNearScreen from '../hooks/useNearScreen'
import Spinner from './Spinner'
import debounce from 'just-debounce-it'

const ListOfGifs = lazy(() => import('./ListOfGifs'))
const NoResultsFound = lazy(() => import('./NoResultFound'))
const ArrowUpCircle = lazy(() => import('./IconArrowUp'))

const ShowGifs = ({ params }) => {
  const { keyword } = params
  const { loading, gifs, setPage, noResultsFound } = useGifs({ keyword })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({
    distance: '360px',
    externalRef: loading ? null : externalRef,
    once: false
  })

  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ), [setPage])

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return <>
    {
      loading
      ? <Spinner />
      : <>
        { noResultsFound
        ? <NoResultsFound keyword={keyword} />
        : <>
            <h3 className="titlePopularGifs">{decodeURI(keyword.replace(/[-]/g, ' '))}</h3>
            <ArrowUpCircle />
            <ListOfGifs gifs={gifs} />
            <div id="visor" ref={externalRef}></div>
          </>
        }
      </>
    }
  </>
}

export default ShowGifs