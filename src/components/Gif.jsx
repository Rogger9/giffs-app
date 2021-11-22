import { memo } from 'react'
import { Link, useLocation } from 'wouter'
import '../styles/Gif.css'

const Gif = ({ title, url, id, height, width }) => {
  const [path] = useLocation()
  return <div className="gifs borderR">
    <Link to={`/gif/${id}`} className="gifLink">
      <img
        loading='lazy'
        className="borderR imgGif"
        src={url}
        alt={title}
      />
      {path !== `/gif/${id}` && <span className="gifSpan flex-center">{title}</span>}
    </Link>
  </div >
}

//Se aclara cuales son las props que realmente usa, para evitar 'malos renders'
export default memo(Gif, (prevProps, nextProps) => {
  //Si es 'true' el elemento(Gif) se memoriza
  return prevProps.id === nextProps.id
})