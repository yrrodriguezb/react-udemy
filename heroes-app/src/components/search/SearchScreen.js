import React, { useMemo } from 'react'
import queryString from 'query-string'
import { HeroCard } from '../hero/HeroCard';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { useLocation, useNavigate } from 'react-router-dom';

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const [ formValues, handleInputChange ] = useForm({
    searchText: q
  });

  const { searchText } = formValues;
  const heroes = useMemo(() => getHeroesByName(q), [ q ]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${ searchText }`)
  }

  return (
    <>
      <h1>Busqueda</h1>
      <hr/>

      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />

          <form onSubmit={ handleSearch }>
            <input 
              type="text"
              placeholder="Buscar un héroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ handleInputChange }
            />

            <button
              type='submit'
              className='btn btn-outline-primary mt-3'
            >
              Buscar
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Resultados: { heroes.length }</h4>
          <hr />
          {
            (q === '') 
              ? <div className='alert alert-info'>Buscar un héroe</div>
              : (heroes.length === 0)
                && <div className='alert alert-danger'>No hay resultados para: { q }</div> 
          }
          {
            heroes.map(hero => (
              <HeroCard key={ hero.id } hero={ hero }/>
            ))
          }
        </div>
      </div>  
    </>
  )
}
