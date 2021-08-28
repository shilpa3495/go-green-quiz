import { quizInitialStateType, QuizActionType } from "./type";

export function quizReducer(
  state: quizInitialStateType,
  action: QuizActionType
) {
  switch (action.type) {
    case "setCurrentQuestionNumber":
      return { ...state, currentQuestionNumber: action.payload };

    case "setButtonName":
      return { ...state, buttonName: action.payload };

    case "getDisabledValue":
      return { ...state, disabledValue: action.payload };

    case "calculateYourScore":
      return {
        ...state,
        yourScore: state.yourScore + action.payload
      };

    case "getSelectedOptionValue":
      return {
        ...state,
        selectedOptionValue: action.payload
      };

    case "getResult":
      return {
        ...state,
        result: action.payload
      };

    default:
      throw new Error();
  }
}
