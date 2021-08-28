import { quizData } from "../../QuizData/data";
import { quizOptions } from "../../QuizData/dataType";
import { useNavigate } from "react-router-dom";
import { useHome } from "../Home/context";
import { useModal } from "../../Component/ModalComponent/context";

import "./style.css";
import { useQuiz } from "./context";

export function Quiz() {

  const {quizState, quizDispatch} = useQuiz()!;

  const { homeState } = useHome()!;
  const { modalState } = useModal()!;

  function getFilteredData() {
    let data = quizData.category.find(
      ({ name }) => name === homeState.selectedCategory
    );
    console.log(data);
    return data!.questions;
  }

  const filteredData = getFilteredData();

  const navigate = useNavigate();

  function getAnswer(btnOption: quizOptions) {
    quizDispatch({ type: "getDisabledValue", payload: true });
    if (btnOption.isRight) {

      quizDispatch({
        type: "getResult",
        payload: {
          ...quizState.result,
          correctAnswers: 1 + quizState.result.correctAnswers,
          attemptedQuestions: 1 + quizState.result.attemptedQuestions
        }
      });

      quizDispatch({
        type: "calculateYourScore",
        payload: filteredData[quizState.currentQuestionNumber].points
      });
    } else {
      quizDispatch({
        type: "getSelectedOptionValue",
        payload: btnOption.optionText
      });

      quizDispatch({
        type: "getResult",
        payload: {
          ...quizState.result,
          wrongAnswers: 1 + quizState.result.wrongAnswers,
          attemptedQuestions: 1 + quizState.result.attemptedQuestions
        }
      });
    }
  }

  function handleSelected(option: quizOptions) {
    if (option.isRight) {
      return "quiz-option-correct";
    } else if (quizState.selectedOptionValue.includes(option.optionText)) {
      return "quiz-option-wrong";
    } else {
      return "quiz-option-button-disabled";
    }
  }

  function getNextQuestion() {
    const nextQuestion = quizState.currentQuestionNumber + 1;

    if (nextQuestion < filteredData.length) {
      quizDispatch({ type: "setCurrentQuestionNumber", payload: nextQuestion });
      quizDispatch({ type: "getDisabledValue", payload: false });
    } else if (nextQuestion === filteredData.length - 1) {
      quizDispatch({ type: "setButtonName", payload: "finish" });
    } else if (nextQuestion === filteredData.length) {
      navigate("/result");
    }
  }

  const quitQuiz = () => {
    navigate("/");
  };

  quizState.result.totalScore = filteredData.reduce(
    (acc, current) => acc + current.points,
    0
  );

  return (
    <div className="quiz-container main-content">
      <div className="quiz-question-container">
        <h3>
          {homeState.selectedCategory} <span>Welcome {modalState.name}!</span>
        </h3>
        <div className="quiz-score-container">
          <p className="grey-text">
            Current Question:- {quizState.currentQuestionNumber + 1}/
            {filteredData?.length}
          </p>
          <h3 style={{ marginLeft: "auto" }}>score:- {quizState.yourScore}</h3>
        </div>

        <div className="quiz-question-text">
          {filteredData[quizState.currentQuestionNumber].questionText}
        </div>
        <div className="quiz-option-container">
          {filteredData[quizState.currentQuestionNumber].options.map(
            quizOptions => (
              <button
                onClick={() => getAnswer(quizOptions)}
                disabled={quizState.disabledValue}
                key={quizOptions.optionText}
                className={`light-button quiz-option-button button-medium ${quizState.disabledValue &&
                  handleSelected(quizOptions)}`}
              >
                {quizOptions.optionText}
              </button>
            )
          )}
        </div>
      </div>
      <div className="quiz-button-container">
        <button
          onClick={() => quitQuiz()}
          className="button-outline-primary button-medium quiz-outline-button"
        >
          Quit
        </button>
        <button
          className="primary-button button-medium"
          onClick={() => getNextQuestion()}
        >
          {quizState.buttonName}
        </button>
      </div>
    </div>
  );
}
