import PropTypes from 'prop-types';
import { GiTripleNeedle } from 'react-icons/gi';

const VaccinationInfoCard = ({ vaccinesToday, totalVaccines }) => {
  return (
    <div className="md:p-8 p-6 mt-5 bg-white shadow-xl rounded-lg flex justify-between dark:bg-gray-800 md:items-center md:flex-row gap-12">
      <div>
        <span className="text-bold text-gray-700 dark:text-gray-400 block">
          Total Vaccinations
        </span>
        <span className="text-green-500 text-4xl md:text-5xl mt-2 font-black block">
          {`${totalVaccines}`}
        </span>
      </div>
      <div className="self-end">
        <div className="md:text-right text-left md:block">
          <p className="text-xl md:mb-2 mb-0 dark:text-gray-100 flex items-center increase">
            <GiTripleNeedle color="red" size="2.5rem" />
            {`${vaccinesToday}`} Administered Today
          </p>
        </div>
      </div>
    </div>
  );
};

VaccinationInfoCard.propTypes = {
  vaccinesToday: PropTypes.number.isRequired,
  totalVaccines: PropTypes.number.isRequired,
};

export default VaccinationInfoCard;
