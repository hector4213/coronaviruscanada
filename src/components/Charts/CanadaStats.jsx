import { SiAircanada } from 'react-icons/si';
import { useSelector } from 'react-redux';

const CanadaStats = () => {
  const { apiLastUpdated } = useSelector((state) => state.appData);
  return (
    <div className="h-auto bg-white  overflow-hidden shadow rounded-lg w-full relative">
      <SiAircanada
        alt="canada logo"
        className="h-24 w-24 rounded-full text-red-600 absolute -top-6 -right-6 md:-right-4"
      />
      <div className="px-4 py-5 sm:p-6">
        <dl>
          <dt className="text-xl leading-5 font-thin text-gray-700 truncate">
            Population Of Canada
          </dt>
          <dd className="mt-1 text-3xl leading-9 font-light text-gray-900">
            37,589,262
          </dd>
          <dd className="text-gray-800 font-light">
            <span>Last Updated: {apiLastUpdated}</span>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default CanadaStats;
