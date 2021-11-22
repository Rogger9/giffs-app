import { useCallback, useRef, useEffect } from 'react'
import { useGifs } from '../hooks/useGifs'
import useNearScreen from '../hooks/useNearScreen'
import ListOfGifs from './ListOfGifs'
import Spinner from './Spinner'
import debounce from 'just-debounce-it'

const ShowGifs = ({ params }) => {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({
    distance: '400px',
    externalRef: loading ? null : externalRef,
    once: false
  })

  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ), [setPage])

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen] )

  return <>
    { loading
      ? <Spinner />
      : <>
        <h3 className="titlePopularGifs">{decodeURI(keyword.replace(/[-]/g, ' '))}</h3>
        <ListOfGifs gifs={gifs} />
        <div id="visor" ref={externalRef}></div>
      </>
    }
  </>
}

export default ShowGifs