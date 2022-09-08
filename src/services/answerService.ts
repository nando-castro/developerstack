import { AnswerType } from "./../types/answerTypes";
import * as questionrepository from "../repositories/questionRepository";
import * as answerrepository from "../repositories/answerRepository";
export async function createAnswer(id: number, answer: AnswerType) {
  const question = await questionrepository.findById(id);

  if (!question) throw { errorType: "not_found" };

  const data = {
    answeredBy: answer.answeredBy,
    answer: answer.answer,
    questionId: id,
  };

  await answerrepository.insert(data);
}
