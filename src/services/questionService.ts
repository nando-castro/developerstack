import { IQuestion } from "./../types/questionTypes";
import * as questionRepository from "../repositories/questionRepository";

export async function createQuestion(question: IQuestion) {
  await questionRepository.insert(question);
}

export async function getQuestion(id: number) {
  const result = await questionRepository.findById(id);
  return result;
}

export async function getQuestions() {
  const result = await questionRepository.findAll();
  return result;
}
