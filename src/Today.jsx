import React, { useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodaySummary } from './redux/ducks/summary';
import ProvinceCard from './components/ProvinceCard';
import ProvinceDash from './components/ProvinceDash';
import AB from './assets/provinces/ab.png';
import BC from './assets/provinces/bc.png';
import MB from './assets/provinces/mb.png';
import NB from './assets/provinces/nb.png';
import QC from './assets/provinces/qc.png';
import NL from './assets/provinces/nl.png';
import NS from './assets/provinces/ns.png';
import NV from './assets/provinces/nv.png';
import ON from './assets/provinces/on.png';
import PEI from './assets/provinces/pei.png';
import NWT from './assets/provinces/nwt.png';
import YT from './assets/provinces/yt.png';
import SK from './assets/provinces/sk.png';

const PROVINCES = [
  { id: 1, name: 'Alberta', img: AB, path: '/alberta', code: 'AB' },
  { id: 2, name: 'Manitoba', img: MB, path: '/manitoba', code: 'MB' },
  { id: 3, name: 'Ontario', img: ON, path: '/ontario', code: 'ON' },
  { id: 4, name: 'PEI', img: PEI, path: '/pei', code: 'PE' },
  { id: 5, name: 'BC', img: BC, path: '/bc', code: 'BC' },
  { id: 6, name: 'New Brunswick', img: NB, path: '/nb', code: 'NB' },
  { id: 7, name: 'NL', img: NL, path: '/nl', code: 'NL' },
  { id: 8, name: 'Quebec', img: QC, path: '/qc', code: 'QC' },
  { id: 9, name: 'Nunavut', img: NV, path: '/nunavut', code: 'NU' },
  { id: 10, name: 'NWT', img: NWT, path: '/nwt', code: 'NT' },
  { id: 11, name: 'Saskatchewan', img: SK, path: '/saskatchewan', code: 'SK' },
  { id: 12, name: 'Nova Scotia', img: NS, path: '/novascotia', code: 'NS' },
  { id: 13, name: 'Yukon', img: YT, path: '/yukon', code: 'YT' },
];

const Provinces = () => {
  const provinceGrid = useSelector((state) => state.summaries);
  const dispatch = useDispatch();
  const { path } = useRouteMatch();
  const { isLoading, today } = provinceGrid;

  useEffect(() => {
    dispatch(fetchTodaySummary());
  }, []);

  if (isLoading) {
    return null; //   loader here state is false if data loaded
  }

  return (
    <div className="container mt-5 mx-auto">
      <Route exact path={`${path}`}>
        {PROVINCES.map((prov) => (
          <ProvinceCard
            key={prov.id}
            name={prov.name}
            logo={prov.img}
            province={today.find((item) => item.province === prov.name)}
            path={prov.path}
          />
        ))}
      </Route>
      {PROVINCES.map((prov) => (
        <Route path={`${path}${prov.path}`} key={prov.id}>
          <ProvinceDash code={prov.code} />
        </Route>
      ))}
    </div>
  );
};

export default Provinces;
