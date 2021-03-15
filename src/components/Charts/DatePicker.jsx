import { useState, useEffect } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import { getWeekSummaryCanada } from '../../redux/ducks/casesChartSlice';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const DatePicker = () => {
  const { apiStartDate, apiLastUpdated } = useSelector(
    (state) => state.appData,
  );
  const dispatch = useDispatch();
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  useEffect(() => {}, [apiStartDate]);

  const onDateChange = (item) => {
    const { startDate, endDate } = item.selection;

    dispatch(
      getWeekSummaryCanada({
        before: format(endDate, 'yyyy-MM-dd'),
        after: format(startDate, 'yyyy-MM-dd'),
      }),
    );
    setDates([item.selection]);
  };

  if (!apiStartDate || !apiLastUpdated) {
    return null;
  }

  return (
    <div>
      <DateRange
        editableDateInputs={() => true}
        onChange={onDateChange}
        moveRangeOnFirstSelection={false}
        ranges={dates}
        maxDate={new Date(apiLastUpdated.replace(/-/g, '/'))}
        minDate={new Date(apiStartDate.replace(/-/g, '/'))}
      />
    </div>
  );
};

export default DatePicker;
