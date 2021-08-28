export type ResultType = {
  correctAnswers: number;
  wrongAnswers: number;
  attemptedQuestions: number;
  totalScore: number;
};

export type quizInitialStateType = {
  currentQuestionNumber: number;
  buttonName: string;
  disabledValue: boolean;
  yourScore: number;
  selectedOptionValue: string;
  result: ResultType;
};

export type QuizActionType =
  | { type: "setCurrentQuestionNumber"; payload: number }
  | { type: "setButtonName"; payload: string }
  | { type: "getDisabledValue"; payload: boolean }
  | { type: "calculateYourScore"; payload: number }
  | { type: "getSelectedOptionValue"; payload: string }
  | {
      type: "getResult";
      payload: {
        correctAnswers: number;
        wrongAnswers: number;
        attemptedQuestions: number;
        totalScore: number;
      };
    };

export type QuizContextType = {
  quizState: quizInitialStateType;
  quizDispatch: React.Dispatch<QuizActionType>
};
