import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages';
import { getHeroesById } from '../../selectors/getHeroById';


export const HeroScreen = () => {
  const { heroId } = useParams();
  const navigate = useNavigate()

  // Solo renderiza si el heroId cambio
  const hero = useMemo(() => getHeroesById(heroId), [ heroId ]) ;

  const handleReturn = () => {
    navigate(-1); // Pagina anterior
  }

  if (!hero)
    return <Navigate to="/" />
    
  return (
    <div className="row mt-5 animate__animated animate__fadeIn">
      <div className='col-4'>
        <img 
          src={ heroImages(`./${ hero.id }.jpg`) } 
          alt={ hero.superhero }
          className="img-thumbnail animate__animated animate__fadeInLeft"
          />
      </div>

      <div className='col-8'>
        <h3>{ hero.superhero }</h3>
        <ul className='list-group'>
          <li className="list-group-item">
            <b>Alter  ego: </b>
            { hero.alter_ego }
          </li>
          <li className="list-group-item">
            { hero.publisher }
          </li>
          <li className="list-group-item">
            { hero.first_appearance }
          </li>
        </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{ hero.characters }</p>

        <button
          className='btn btn-outline-info'
          onClick={ handleReturn }
        >
          Regresar
        </button>

      </div>
    </div>
  )
}
