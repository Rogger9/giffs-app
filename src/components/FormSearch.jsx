import { useState, memo } from 'react'
import { useLocation } from 'wouter'
import Button from './Button'
import '../styles/FormSearch.css'

const FormSearch = () => {
  const [keyword, setKeyword] = useState('')
  const [_, pushLocation] = useLocation()

  const onSubmit = (e) => {
    e.preventDefault()
    const normalizeKeyword = keyword.trim().replace(/\s/g, '-')
    keyword.length > 0 && pushLocation(`/giffs/search/${normalizeKeyword}`)
  }

  const handleChange = (e) => setKeyword(e.target.value)

  return <form onSubmit={onSubmit} className="formSearch flex-center">
    <input
      type="text"
      placeholder="Search gif..."
      className="inputSearch"
      value={keyword}
      onChange={handleChange}
      aria-label="search"
      required
    />
    <Button className="btn" value="Search" />
  </form>

}

export default memo(FormSearch)