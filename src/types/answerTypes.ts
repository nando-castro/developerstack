export interface IAnswer {
  id: number;
  answeredBy: string;
  answer: string;
  questionId: number;
}

export type AnswerType = Omit<IAnswer, `id`>;
