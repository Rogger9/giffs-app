import { useContext, useEffect, useState } from 'react'
import { getGifs } from '../services/getGifs.services'
import { LocalStorage } from '../services/LocalStorage.services'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0

export const useGifs = ({ keyword } = { keyword: null }) => {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const { gifs, setGifs } = useContext(GifsContext)

  const keywordToUse = keyword || LocalStorage.get('lastKeyword') || 'random'

  useEffect(async () => {
    setLoading(true)
    const res = await getGifs({keyword: keywordToUse})
    setGifs(res)
    setLoading(false)
    LocalStorage.set('lastKeyword', keyword)
  }, [keyword, keywordToUse, setGifs])

  useEffect(async () => {
    if (page === INITIAL_PAGE) return

    setLoadingNextPage(true)
    const nextGifs = await getGifs({ keyword: keywordToUse, page})
    setGifs( prevGifs => prevGifs.concat(nextGifs))
    setLoadingNextPage(false)
  }, [keywordToUse, page])

  return { loading, loadingNextPage, gifs, setPage }
}