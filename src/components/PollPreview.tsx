import { useNavigate } from "react-router-dom";
import { Poll } from "../types/pollSchema";
import Box from "./Containers/Box";
import PollChart from "./PollChart";
import PollDate from "./PollDate";

type PollPreviewProps = {
  poll: Poll;
};

const PollPreview = ({ poll }: PollPreviewProps) => {
  const {
    title,
    publishedDate,
    id,
    answer: { options },
  } = poll;
  const navigate = useNavigate();

  return (
    <Box
      css={{
        border: "1px solid black",
        display: "flex",
        height: "15rem",
        "@sm": {
          height: "auto",
        },
      }}
      onClick={() => {
        navigate(`/${id}`);
      }}
    >
      <PollChart options={options} />
      <Box direction="column" align="flex-start">
        <PollDate date={publishedDate} />
        <div>{title}</div>
      </Box>
    </Box>
  );
};

export default PollPreview;
