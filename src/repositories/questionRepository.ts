import { QuestionType } from "./../types/questionTypes";
import { prisma } from "../config/database";

export async function insert(data: QuestionType) {
  await prisma.question.create({ data });
}

export async function findById(id: number) {
  const rows = await prisma.question.findUnique({ where: { id } });
  return rows;
}

export async function findAll() {
  const rows = await prisma.question.findMany({ include: { Answers: true } });
  const data = {
    questions: rows,
  };
  return data;
}
