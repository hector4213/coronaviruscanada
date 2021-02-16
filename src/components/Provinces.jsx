import React from 'react';
import PropTypes from 'prop-types';
import ProvinceCard from './ProvinceCard';
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
  { name: 'Alberta', img: AB },
  { name: 'Manitoba', img: MB },
  { name: 'Ontario', img: ON },
  { name: 'PEI', img: PEI },
  { name: 'BC', img: BC },
  { name: 'New Brunswick', img: NB },
  { name: 'NL', img: NL },
  { name: 'Quebec', img: QC },
  { name: 'Nunavut', img: NV },
  { name: 'NWT', img: NWT },
  { name: 'Saskatchewan', img: SK },
  { name: 'Nova Scotia', img: NS },
  { name: 'Yukon', img: YT },
];

const Provinces = ({ provinceData }) => {
  return (
    <div className="mt-8 grid lg:grid-cols-4 gap-10">
      {PROVINCES.map((prov) => (
        <ProvinceCard
          name={prov.name}
          logo={prov.img}
          province={provinceData.find((item) => item.province === prov.name)}
        />
      ))}
    </div>
  );
};

Provinces.propTypes = {
  provinceData: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Provinces;
