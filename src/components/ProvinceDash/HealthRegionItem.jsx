import PropTypes from 'prop-types';

const HealthRegionItem = ({ region }) => {
  return (
    <li className="flex flex-row">
      <div className="select-none cursor-pointer flex flex-1 items-center p-4">
        <div className="flex-1 pl-1 mr-16">
          <div className="font-medium dark:text-white">{region}</div>
        </div>
      </div>
    </li>
  );
};

HealthRegionItem.propTypes = {
  region: PropTypes.string.isRequired,
};

export default HealthRegionItem;
