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
    <div className="relative">
      <label htmlFor="display-name" className="text-gray-700">
        Update your display name
        <input
          type="text"
          id="display-name"
          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          name="display-name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button
        className="py-2 px-4 mt-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
        type="submit"
        onClick={handleUpdate}
      >
        Update
      </button>
    </div>
  );
};

export default DisplayNameInput;
