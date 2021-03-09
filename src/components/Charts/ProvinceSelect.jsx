import React from 'react';

const ProvinceSelect = ({ provinceName }) => {
  return (
    <button
      type="button"
      className="py-2 px-4  bg-gradient-to-r from-green-400 to-blue-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
    >
      {provinceName}
    </button>
  );
};

export default ProvinceSelect;
