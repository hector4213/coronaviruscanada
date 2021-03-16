import { SiAircanada } from 'react-icons/si';
import { useSelector } from 'react-redux';

const CanadaStats = () => {
  const { apiLastUpdated } = useSelector((state) => state.appData);
  return (
    <div className="bg-white  overflow-hidden shadow rounded-lg w-full md:w-full relative">
      <SiAircanada
        alt="canada logo"
        className="h-24 w-24 rounded-full absolute opacity-50 -top-6 -right-6 md:-right-4"
      />
      <div className="px-4 py-5 sm:p-6">
        <dl>
          <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
            Population
          </dt>
          <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">
            37589262
          </dd>
          <dd className="text-gray-500 font-semibold">
            <span>Last Updated: {apiLastUpdated}</span>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default CanadaStats;
