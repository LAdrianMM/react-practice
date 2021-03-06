import { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { heroById } from '../../selector/getHeroById'

export const HeroScreen = () => {
  const { heroeId } = useParams()
  const navigate = useNavigate()

  const hero = useMemo(() => heroById(heroeId), [heroeId])

  if (!hero) {
    return <Navigate to='/' />
  }

  const { id, superhero, publisher, alter_ego, characters, first_appearance } =
    hero

  const imgPath = `/assets/${id}.jpg`

  const handleReturn = () => {
    navigate(-1)
  }

  return (
    <div className='row mt-5'>
      <div className='col-4 animate__animated animate__fadeInLeft'>
        <img src={imgPath} alt={superhero} className='img-thumbnail' />
      </div>

      <div className='col-8 animate__animated animate__fadeIn'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            {' '}
            <b>Alter ego:</b> {alter_ego}{' '}
          </li>
          <li className='list-group-item'>
            {' '}
            <b>Publicher:</b> {publisher}{' '}
          </li>
          <li className='list-group-item'>
            {' '}
            <b>First Appearance:</b> {first_appearance}{' '}
          </li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{characters}</p>

        <button className='btn btn-outline-info' onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  )
}
