import Gif from './Gif'
import '../styles/ListOfGifs.css'

const ListOfGifs = ({ gifs }) => (
  <div className="listOfGifs">
    {
      gifs.map(({ id, title, url, width, height, ...restOfGif }) =>
        <Gif
          key={id}
          title={title}
          url={url}
          id={id}
          width={width}
          height={height}
          extraInfo={restOfGif}
        />
      )
    }
  </div>
)

export default ListOfGifs