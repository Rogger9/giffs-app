import { Link } from 'wouter'

const Category = ({ name, options = [] }) => (
  <>
    <h4 className="titlePopularGifs">{name}</h4>
    <ul className="ulHome">
      {
        options.map( gif => (
          <li key={gif}>
            <Link to={`/search/${gif.trim().replace(/\s/g, '-')}`} className="linkHome">
              {gif}
            </Link>
          </li>
        ))
      }
    </ul>
  </>
)

export default Category