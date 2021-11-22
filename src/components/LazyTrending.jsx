import { lazy, Suspense } from 'react'
import useNearScreen from '../hooks/useNearScreen'
import Spinner from './Spinner'

const TrendingSearches = lazy(() => import('./TrendingSearches'))

const LazyTrending = () => {
  const { isNearScreen, fromRef } = useNearScreen()

  return <div ref={fromRef}>
    <Suspense fallback={<Spinner />}>
      { isNearScreen ? <TrendingSearches /> : null }
    </Suspense>
  </div>
}

export default LazyTrending