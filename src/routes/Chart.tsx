import { fetchCoinHistory } from "api";
import { useQuery } from "react-query";
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
}

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

const Chart = ({ coinId }: ChartProps) => {
  const { isLoading, data: historicalData } = useQuery<IHistorical[]>(
    ["ohlcv2", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 5000,
    }
  );

  if (!historicalData) return null;

  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: [
                {
                  x: new Date(1538778600000),
                  y: [6629.81, 6650.5, 6623.04, 6633.33],
                },
                {
                  x: new Date(1538780400000),
                  y: [6632.01, 6643.59, 6620, 6630.11],
                },
                {
                  x: new Date(1538782200000),
                  y: [6630.71, 6648.95, 6623.34, 6635.65],
                },
              ],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              type: "candlestick",
              height: 350,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            stroke: {
              curve: "smooth",
              width: 2,
            },
            yaxis: {
              show: false,
            },

            plotOptions: {
              candlestick: {
                colors: {
                  upward: "#3C90EB",
                  downward: "#DF7D46",
                },
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
