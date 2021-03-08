import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import { getProvTrendsByDate } from '../../redux/ducks/chart';

const Chart = () => {
  const chartData = useSelector((state) => state.chart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProvTrendsByDate('prov', '01-09-2020'));
  }, []);
  return (
    <div>
      <Pie data={chartData} width={100} height={50} options={{}} />
    </div>
  );
};

export default Chart;
