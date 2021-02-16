import PropTypes from 'prop-types';

const ProvinceDash = ({ name }) => {
  return (
    <div>
      <div>
        <h1>Select a city for province {name}</h1>
      </div>
    </div>
  );
};

ProvinceDash.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProvinceDash;
