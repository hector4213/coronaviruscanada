import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProvinceCard from './ProvinceCard';
import ProvinceDash from './ProvinceDash';
import AB from '../assets/provinces/ab.png';
import BC from '../assets/provinces/bc.png';
import MB from '../assets/provinces/mb.png';
import NB from '../assets/provinces/nb.png';
import QC from '../assets/provinces/qc.png';
import NL from '../assets/provinces/nl.png';
import NS from '../assets/provinces/ns.png';
import NV from '../assets/provinces/nv.png';
import ON from '../assets/provinces/on.png';
import PEI from '../assets/provinces/pei.png';
import NWT from '../assets/provinces/nwt.png';
import YT from '../assets/provinces/yt.png';
import SK from '../assets/provinces/sk.png';

const PROVINCES = [
  { name: 'Alberta', img: AB, path: '/alberta' },
  { name: 'Manitoba', img: MB, path: '/manitoba' },
  { name: 'Ontario', img: ON, path: '/ontario' },
  { name: 'PEI', img: PEI, path: '/pei' },
  { name: 'BC', img: BC, path: '/bc' },
  { name: 'New Brunswick', img: NB, path: '/nb' },
  { name: 'NL', img: NL, path: '/nl' },
  { name: 'Quebec', img: QC, path: '/qc' },
  { name: 'Nunavut', img: NV, path: '/nunavut' },
  { name: 'NWT', img: NWT, path: '/nwt' },
  { name: 'Saskatchewan', img: SK, path: '/saskatchewan' },
  { name: 'Nova Scotia', img: NS, path: '/novascotia' },
  { name: 'Yukon', img: YT, path: '/yukon' },
];

const Provinces = ({ provinceData }) => {
  return (
    <div className="mt-8 grid lg:grid-cols-4 gap-10">
      <Switch>
        <Route exact path="/">
          {PROVINCES.map((prov) => (
            <ProvinceCard
              name={prov.name}
              logo={prov.img}
              province={provinceData.find(
                (item) => item.province === prov.name,
              )}
              path={prov.path}
            />
          ))}
        </Route>
        {PROVINCES.map((prov) => (
          <Route path={prov.path}>
            <ProvinceDash name={prov.name} />
          </Route>
        ))}
      </Switch>
    </div>
  );
};

Provinces.propTypes = {
  provinceData: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Provinces;
