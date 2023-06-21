import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const handleSubmit = (event) => {
    event.preventDefault()
    const searchValue = event.target.elements.search.value

    if (!searchValue) return

    setSearchTerm(searchValue)
  }
  return (
    <section>
      <h1 className='title'>Unsplash images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-input'
          name='search'
          placeholder='cat'
        />
        <button type='submit' className='btn'>
          Search
        </button>
      </form>
    </section>
  )
}

export default SearchForm