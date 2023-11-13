import { useState } from "react";
import Box from "../components/Containers/Box";
import PollDetail from "../components/PollDetail";
import polls from "../data/poll.json";
import { Poll } from "../types/pollSchema";
import { styled } from "../styles";
import PollPreview from "../components/PollPreview";

const PollListingPage = (): JSX.Element => {
  const [pollData] = useState<Poll[]>(polls.polls as Poll[]);

  return (
    <Box direction="column">
      <PollDetail poll={pollData[0]} />
      <PollPreviewGrid>
        {
          pollData.slice(1).map((poll, index) => {
            return <PollPreview poll={poll} key={index} />
          })
        }
      </PollPreviewGrid>
    </Box>
  );
};

const PollPreviewGrid = styled("div", {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  "@sm": {
    gridTemplateColumns: 'repeat(1, 1fr)',
  }
})

export default PollListingPage;
