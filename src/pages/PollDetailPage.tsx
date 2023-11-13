import { useState, useMemo } from "react";
import Box from "../components/Containers/Box";
import { Poll } from "../types/pollSchema";
import PollDetail from "../components/PollDetail";
import { useParams } from "react-router-dom";
import polls from "../data/poll.json";

const PollDetailPage = (): JSX.Element => {
  const [pollData] = useState<Poll[]>(polls.polls as Poll[]);
  const { id } = useParams();

  const poll = useMemo(() => {
    if (!id) {
      return null;
    }
    const pollId = parseInt(id, 10);
    return pollData.find((p) => p.id === pollId);
  }, [pollData, id]);

  if (!poll) {
    return <div>Poll doesn't exist</div>;
  }

  return (
    <Box>
      <PollDetail poll={poll} />
    </Box>
  );
};

export default PollDetailPage;
