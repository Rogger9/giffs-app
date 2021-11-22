import Gif from './Gif'
import '../styles/ListOfGifs.css'

const ListOfGifs = ({ gifs }) => (
  <div className="listOfGifs">
    {
      gifs.map(({ id, title, url, ...restOfGif }) =>
        <Gif
          key={id}
          title={title}
          url={url}
          id={id}
          extraInfo={restOfGif}
        />
      )
    }
  </div>
)

export default ListOfGifs