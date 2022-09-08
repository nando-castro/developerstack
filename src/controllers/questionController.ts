import { IAnswer } from "./../types/answerTypes";
import { IQuestion } from "./../types/questionTypes";
import { Request, Response } from "express";
import * as questionServices from "../services/questionService";
import * as answerServices from "../services/answerService";

export async function createQuestion(req: Request, res: Response) {
  const question: IQuestion = req.body;
  await questionServices.createQuestion(question);
  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const { id } = req.params;
  const answer: IAnswer = req.body;
  await answerServices.createAnswer(Number(id), answer);
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const result = await questionServices.getQuestions();
  res.status(200).send(result);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const result = await questionServices.getQuestion(Number(id));
  res.status(200).send(result);
}
