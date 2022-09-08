export interface IQuestion {
  id: number;
  askedBy: string;
  question: string;
}

export type QuestionType = Omit<IQuestion, `id`>;
