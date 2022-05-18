
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


export const HeroCard = ({ hero }) => {

  const imagePath = `/assets/img/heroes/${hero.id}.jpg`;

  return (
    <div className='col animate__animated animate__fadeIn'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img 
              src={ imagePath } 
              className="card-img" 
              alt={ hero.superhero }  
            />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>{ hero.superhero }</h5>
              <p className='card-text'>{ hero.alter_ego }</p>
              {
                ( hero.alter_ego !== hero.characters && <p className="text-mute">{ hero.characters }</p>)
              }
              <p className='card-text'>
                <small className='text-muted'>{ hero.appearance }</small>
              </p>

              <Link to={ `/hero/${hero.id}` }>
                Mas...
              </Link>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

HeroCard.propTypes = {
  hero: PropTypes.object
}