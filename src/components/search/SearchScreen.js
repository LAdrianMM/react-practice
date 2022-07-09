import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selector/getHeroesByName'
import { HeroCard } from '../../components/hero/HeroCard'

export const SearchScreen = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)

  const [{ searchText }, handleChange] = useForm({
    searchText: q,
  })

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>Búsquedas</h1>
      <hr />

      <div className='row'>
        <div className='col-5'>
          <h4>Buscar</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type='text'
              placeholder='Buscar un héroe'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={handleChange}
            />

            <button type='submit' className='btn btn-outline-primary mt-2'>
              Buscar ...
            </button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Resultado</h4>
          <hr />

          {q === '' ? (
            <div className='alert alert-info'> Buscar un héroe</div>
          ) : (
            heroesFiltered.length === 0 && (
              <div className='alert alert-danger'> No hay resultado: {q}</div>
            )
          )}

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  )
}
