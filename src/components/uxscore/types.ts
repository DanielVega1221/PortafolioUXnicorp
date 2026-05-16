export type QuestionOption = {
  id: string;
  label: string;
  detail: string;
  score: number;
  areaLabel: string;
  recommendation: string;
  target: string;
};

export type Question = {
  id: string;
  eyebrow: string;
  prompt: string;
  helper: string;
  whyItMatters: string;
  tip: string;
  options: QuestionOption[];
};

export type Answers = Record<string, string>;
