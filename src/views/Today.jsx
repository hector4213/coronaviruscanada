import React, { useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTodaySummaries } from '../redux/ducks/summarySlice';
import { getAppProvinces } from '../redux/ducks/infoSlice';
import ProvinceCard from '../components/ProvinceCard';
import ProvinceDash from '../components/ProvinceDash';
import Loader from '../components/Loader';

const Today = () => {
  const { isLoading, today } = useSelector((state) => state.summaries);
  const { provinceData } = useSelector((state) => state.appData);
  const dispatch = useDispatch();
  const { path } = useRouteMatch();

  useEffect(() => {
    if (!today) {
      dispatch(getTodaySummaries());
    }
  }, [today]);

  useEffect(() => {
    if (provinceData.length < 1) {
      dispatch(getAppProvinces());
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container mt-4 mx-auto">
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
            <Route exact path={`${path}`}>
              <h1 className="text-3xl col-span-full text-center md:text-4xl font-medium mb-2 p-10">
                Select a province to view todays stats
              </h1>
              {provinceData.map((prov) => (
                <ProvinceCard
                  key={prov.id}
                  name={prov.name}
                  logo={prov.img}
                  province={today.find((item) => item.province === prov.name)}
                  path={prov.path}
                />
              ))}
            </Route>
          </div>
          {provinceData.map((prov) => (
            <Route path={`${path}${prov.path}`} key={prov.id}>
              <ProvinceDash code={prov.code} />
            </Route>
          ))}
        </div>
      )}
    </>
  );
};

export default Today;
