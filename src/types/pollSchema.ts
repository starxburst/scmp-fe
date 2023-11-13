export type Poll = {
  id: number;
  title: string;
  publishedDate: number;
  answer: PollAnswer;
}

type PollAnswer = {
  type: 'Single' | 'Multi';
  options: PollAnswerOption[]
}

export type PollAnswerOption = {
  id: number;
  label: string;
}

export type FakeAnswer = {
  id: number;
  count: number;
}