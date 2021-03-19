const Loader = () => {
  return (
    <div className="loader min-h-screen flex justify-center items-center bg-gray-400 bg-opacity-25">
      <div className="bg-white p-5 rounded-full flex space-x-3">
        <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce" />
        <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce" />
        <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce" />
      </div>
    </div>
  );
};

export default Loader;
