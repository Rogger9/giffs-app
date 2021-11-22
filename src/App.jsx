import { Suspense, lazy } from 'react'
import { Link,Route } from 'wouter'
import { GifsContextProvider } from './context/GifsContext'
import IconPlay from './components/IconPlay'
import Footer from './components/Footer'
import './App.css'

const HomePage = lazy(() => import('./components/Home'))
const ShowGifsPage = lazy(() => import('./components/ShowGifs'))
const DetailPage = lazy(() => import('./components/Detail'))

function App() {
  return <Suspense fallback={null}>
    <div className="App flex-center">
    <Link to="/">
      <a className="titleApp flex-center">
        <h1>Giffs</h1>
        <IconPlay />
      </a>
    </Link>
    <GifsContextProvider>
      <Route path="/" component={HomePage} />
      <Route path="/search/:keyword" component={ShowGifsPage} />
      <Route path="/gif/:id" component={DetailPage} />
    </GifsContextProvider>
    </div>
  </Suspense>
}

export default App