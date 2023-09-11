import "./home.scss";
import TopDeals from "../../components/topBox/TopDeals";
import ChartBox from "../../components/chartBox/ChartBox";
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxConversion,
  barChartBoxVisit,
  barChartBoxRevenue,
} from "../../data";
import BarChartBox from "../../components/barchartBox/BarChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import ButtomChart from "../../components/buttomChart/ButtomChart";
const Home = () => {
  return (
    <div className='home'>
      <div className='box box1'>
        <TopDeals />
      </div>
      <div className='box box2'>
        <ChartBox {...chartBoxUser} />
      </div>
      <div className='box box3'>
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className='box box4'>
        <PieChartBox />
      </div>
      <div className='box box5'>
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className='box box6'>
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className='box box7'>
        <ButtomChart />
      </div>
      <div className='box box8'>
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className='box box9'>
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
