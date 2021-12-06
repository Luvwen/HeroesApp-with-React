import { Route, Routes } from 'react-router';
import { Navbar } from '../ui/NavBar';

import { MarvelScreen } from '../marvel/MarvelScreen';
import { SearchScreen } from '../search/SearchScreen';
import { DcScreen } from '../dc/DcScreen';
import { HeroScreen } from '../hero/HeroScreen';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='marvel' element={<MarvelScreen />} />
          <Route path='search' element={<SearchScreen />} />
          <Route path='dc' element={<DcScreen />} />
          <Route path='hero/:heroeId' element={<HeroScreen />} />

          <Route path='/' element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  );
};
