import Box from "../components/Containers/Box";
import { useAnswer } from "../hooks/useAnswer";
import { styled } from "../styles";
import { Poll } from "../types/pollSchema";
import PollChart from "./PollChart";
import PollDate from "./PollDate";
import PollOption from "./PollOption";

type PollDetailProps = {
  poll: Poll;
};

const PollDetail = ({ poll }: PollDetailProps): JSX.Element => {
  const { answers, setAnswers } = useAnswer();
  const {
    title,
    publishedDate,
    id,
    answer,
    answer: { options },
  } = poll;

  const totalNumberVoted = options.map(option => option.id).reduce((acc, curr) => {
    return (answers.find(answer => answer.id === curr)?.count || 0) + acc
  }, 0)

  return (
    <Box css={{
      backgroundColor: "rgba(173, 216, 230, 0.1)",
    }} direction="column" align="flex-start">
      <Box responsive>
        <Box direction="column" align="flex-start">
          <Header>Today's Poll</Header>
          <Title>
            {title}
            <PollDate date={publishedDate} />
          </Title>
          <PollOption answer={answer} />
        </Box>
        <PollChart options={options} />
      </Box>
      <div>Total number of votes recorded {totalNumberVoted}</div>
    </Box>
  );
};

const Header = styled("div", {});

const Title = styled("div", {
  display: "flex",
});

export default PollDetail;
