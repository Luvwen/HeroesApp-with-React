import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router';
import { getHeroById } from '../selectors/getHeroesById';

import { heroImages } from '../../helpers/heroImages';

export const HeroScreen = () => {
  const { heroeId } = useParams();

  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

  const navigate = useNavigate();

  const handleReturn = () => {
    return navigate(-1);
  };

  if (!hero) {
    return <Navigate to='/' />;
  }

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          src={heroImages(`./${heroeId}.jpg`).default}
          alt={superhero}
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </div>
      <div className='col-8 animate__animated animate__fadeIn'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter ego: {alter_ego}</b>
          </li>
          <li className='list-group-item'>
            <b>Publisher: {publisher}</b>
          </li>
          <li className='list-group-item'>
            <b>First Appearence: {first_appearance}</b>
          </li>
        </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{characters}</p>

        <button onClick={handleReturn} className='btn btn-outline-info'>
          Regresar
        </button>
      </div>
    </div>
  );
};
