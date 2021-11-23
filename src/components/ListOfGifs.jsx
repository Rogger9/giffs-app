import Gif from './Gif'
import Masonry from 'react-masonry-css'
import '../styles/ListOfGifs.css'

const breakpointColumnsObj = {
  default: 6,
  1320: 5,
  1100: 4,
  880: 3,
  660: 2,
  440: 1
}

const ListOfGifs = ({ gifs }) => (
  <div className="listOfGifs">
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
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
    </Masonry>
  </div>
)

export default ListOfGifs