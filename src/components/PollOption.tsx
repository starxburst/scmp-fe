import { useAnswer } from "../hooks/useAnswer";
import { styled } from "../styles";
import { Poll } from "../types/pollSchema";
import Box from "./Containers/Box";

type PollOptionProps = {
  answer: Poll["answer"];
};

const PollOption = ({ answer }: PollOptionProps): JSX.Element => {
  const { answers, setAnswers } = useAnswer();
  const { type, options } = answer;

  const handleVote = (id: number) => {
    const votedOptionIds = JSON.parse(
      localStorage.getItem("votedOptionId") || "[]"
    );
    if (type === "Single") {
      //check if user has voted
      if (!votedOptionIds.includes(id)) {
        const newAnswers = answers.map((answer) => {
          if (answer.id === id) {
            return {
              ...answer,
              count: answer.count + 1,
            };
          }
          return answer;
        });
        setAnswers(newAnswers);
        votedOptionIds.push(id);
      }
      // check if user has voted another option
      answers.forEach((answer) => {
        if (answer.id !== id && votedOptionIds.includes(answer.id)) {
          const newAnswers = answers.map((answer) => {
            if (answer.id === id) {
              return {
                ...answer,
                count: answer.count - 1,
              };
            }
            return answer;
          });
          setAnswers(newAnswers);
        }
      });

      // votedOptionIds.push(id);
    } else if (type === "Multi") {
      if (!votedOptionIds.includes(id)) {
        const newAnswers = answers.map((answer) => {
          if (answer.id === id) {
            return {
              ...answer,
              count: answer.count + 1,
            };
          }
          return answer;
        });
        setAnswers(newAnswers);
        votedOptionIds.push(id);
      } else {
        const newAnswers = answers.map((answer) => {
          if (answer.id === id) {
            return {
              ...answer,
              count: answer.count - 1,
            };
          }
          return answer;
        });
        setAnswers(newAnswers);
        const index = votedOptionIds.indexOf(id);
        votedOptionIds.splice(index, 1);
      }
    }
    localStorage.setItem("votedOptionIds", JSON.stringify(votedOptionIds));
  };

  return (
    <Box css={{ width: "fit-content" }}>
      {options.map((option) => {
        return (
          <Option key={option.id} onClick={() => handleVote(option.id)}>
            {option.label}
          </Option>
        );
      })}
    </Box>
  );
};

export default PollOption;

const Option = styled("div", {
  border: "1px solid black",
});
