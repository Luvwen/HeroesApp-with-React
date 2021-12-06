import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HeroCard } from '../hero/HeroCard';
import { useForm } from '../hooks/useForm';
import { getHeroesByName } from '../selectors/getHeroesByName';
import queryString from 'query-string';

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
    navigate(`?q=${searchText}`);
  };

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
              placeholder='Buscar un heroe'
              className='form-control mt-4'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange}
            />
            <button className='btn btn-outline-primary mt-3 ' type='submit'>
              Buscar
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Resultados</h4>
          <hr />
          {q === '' ? (
            <div className='alert alert-info animate__animated animate__fadeIn'>
              <b>Buscar un heroe</b>
            </div>
          ) : (
            heroesFilter.length === 0 && (
              <div className='alert alert-danger'>
                No hay resultados para: <b>{q}</b>
              </div>
            )
          )}
          {heroesFilter.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
