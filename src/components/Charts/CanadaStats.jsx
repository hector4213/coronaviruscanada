import { SiAircanada } from 'react-icons/si';

const CanadaStats = () => {
  return (
    <div className="bg-white  overflow-hidden shadow rounded-lg w-60 md:w-72 relative">
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
            10,0000000
          </dd>
          <dd className="text-gray-500 font-semibold">
            <span>Last Updated: 2020,1,20</span>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default CanadaStats;
