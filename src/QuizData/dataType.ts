export type quizOptions = {
  optionText: string;
  isRight: boolean;
};

export type quizQuestions = {
  questionText: string;
  points: number;
  options: quizOptions[];
};

export type quizCategory = {
  name: string;
  image:any;
  questions: quizQuestions[];
};

export type Quiz = {
  quizName: string;
  category: quizCategory[];
};

export type CategoryArray = {
  name: string;
  image: string;
  description: string;
};

