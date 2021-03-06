import { memo } from 'react'
import { Link, useLocation } from 'wouter'
import '../styles/Gif.css'

const Gif = ({ title, url, id, width, height }) => {
  const [path] = useLocation()
  return <div className="gifs borderR">
    <Link to={`/giffs/gif/${id}`} className="gifLink flex-center">
      <img
        loading="lazy"
        className="borderR imgGif"
        src={url}
        width={width}
        height={height}
        alt={title}
      />
      {path !== `/giffs/gif/${id}` && <span className="gifSpan flex-center">{title}</span>}
    </Link>
  </div >
}

//Se aclara cuales son las props que realmente usa, para evitar 'malos renders'
export default memo(Gif, (prevProps, nextProps) => {
  //Si es 'true' el elemento(Gif) se memoriza
  return prevProps.id === nextProps.id
})