import { ArcElement, Chart as ChartJS, Tooltip } from "chart.js";
import { useCallback, useMemo } from "react";
import { Pie } from "react-chartjs-2";
import { useAnswer } from "../hooks/useAnswer";
import { PollAnswerOption } from "../types/pollSchema";
import Box from "./Containers/Box";

type PollChartProps = {
  options: PollAnswerOption[];
};

const PollChart = ({ options }: PollChartProps) => {
  const { answers } = useAnswer();
  const getRandomColor = useCallback(() => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, 0.6)`;
  }, []);

  const randomChartColor = useMemo(
    () => options.map(() => getRandomColor()),
    [options, getRandomColor]
  );
  ChartJS.register(ArcElement, Tooltip);

  const chartData = {
    labels: options.map((option) => option.label),
    datasets: [
      {
        data: options.map((option) => {
          const answer = answers.find((answer) => answer.id === option.id);
          return answer ? answer.count : 0;
        }),
        backgroundColor: randomChartColor,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Box
      css={{
        "@sm": {
          width: "50%",
        },
      }}
    >
      <Pie data={chartData} options={chartOptions} />
    </Box>
  );
};

export default PollChart;
