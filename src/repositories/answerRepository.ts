import { AnswerType } from "./../types/answerTypes";
import { prisma } from "../config/database";

export async function insert(answer: AnswerType) {
  await prisma.answers.create({ data: answer });
}
