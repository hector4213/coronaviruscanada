import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDisplayName } from '../../redux/ducks/userSlice';

const DisplayNameInput = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [name, setName] = useState(currentUser.displayName);
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateDisplayName({ id: currentUser.id, newName: name }));
  };

  return (
    <div className="flex flex-col mt-4">
      <div className="px-8">
        <label htmlFor="displayName" className="text-gray-700">
          <p className="w-full my-4 font-light text-center mx-auto ">
            Update your display name
          </p>
          <input
            type="text"
            id="displayName"
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="displayName"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="mx-auto">
        <button
          className="py-2 px-4 mt-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg md:w-48"
          type="submit"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default DisplayNameInput;
