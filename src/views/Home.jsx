import banner from '../assets/banner.svg';

const Home = () => {
  return (
    <div className="w-full p-1 mt-2 md:mt-20 md:p-4">
      <div className="flex flex-col bg-white dark:bg-gray-800 md:flex-row items-center justify-between">
        <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">View COVID-19 stats in Canada</span>
            <span className="block text-indigo-500">
              View Trends and Book an Appointment
            </span>
          </h2>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Get started
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <img src={banner} className="h-full max-w-1/2" alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Home;
