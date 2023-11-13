import { useContext } from "react";
import { AnswerContext } from "../context/pollAnswerStore";

export function useAnswer() {
  const context = useContext(AnswerContext);
  if (!context) {
    throw new Error('useAnswer must be used within an AnswerProvider');
  }
  return context;
}