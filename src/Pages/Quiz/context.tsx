import { createContext, ReactNode, useContext, useReducer} from "react";
import { quizReducer } from "./reducer";
import { QuizContextType, quizInitialStateType } from "./type";




const QuizContext = createContext<QuizContextType|undefined>(undefined);

export function QuizProvider({ children }:{children:ReactNode}) {

    const quizInitialState: quizInitialStateType = {
        currentQuestionNumber: 0,
        buttonName: "Next",
        disabledValue: false,
        yourScore: 0,
        selectedOptionValue: "",
        result: {
          correctAnswers: 0,
          wrongAnswers: 0,
          attemptedQuestions: 0,
          totalScore: 0
        }
      };
    
      const [quizState, quizDispatch] = useReducer(quizReducer, quizInitialState);

  return <QuizContext.Provider value={{quizState, quizDispatch}}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  return useContext(QuizContext);
}


