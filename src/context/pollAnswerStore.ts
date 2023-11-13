import { createContext } from "react";
import { fakeAnswer } from "../data/fakeAnswerData.ts";
import { FakeAnswer } from "../types/pollSchema.ts";

type AnswerContextType = {
  answers: FakeAnswer[],
  setAnswers: React.Dispatch<React.SetStateAction<FakeAnswer[]>>
}

export const AnswerContext = createContext<AnswerContextType | undefined>(fakeAnswer);
