import { useModal } from "../../Component/ModalComponent/context";
import { useQuiz } from "../Quiz/context";
import "./style.css"

export function Result() {
  const { modalState } = useModal()!;
  const { quizState } = useQuiz()!;



  return (
    <div className="text-card result-card-container">
      <h2 className="result-thanks-text"> 🙏🏻 Thank You {modalState.name}!</h2>

      <div className="text-card-heading result-sub-heading-container">
        <span className="grey-text result-sub-heading-text">😍 Correct:-</span>
        <span className="result-highlighted-text" style={{ color: "#05c887" }}>
          {quizState.result.correctAnswers}
        </span>
      </div>
      
      <div className="text-card-heading result-sub-heading-container">
        <span className="grey-text result-sub-heading-text">🧐 Wrong:-</span>
        <span className="result-highlighted-text">{quizState.result.wrongAnswers}</span>
      </div>

      <div className="text-card-heading result-sub-heading-container">
        <span className="grey-text result-sub-heading-text">✅ Score:-</span>
        <span className="result-highlighted-text">{quizState.yourScore}</span>/
        <span>{quizState.result.totalScore}</span>
      </div>

      <div className="text-card-heading result-sub-heading-container">
        <span className="grey-text result-sub-heading-text"> 📖 Attempted Questions:-</span>
        <span className="result-highlighted-text">{quizState.result.attemptedQuestions}</span>
      </div>

      <a href="/"
        className="primary-button button-medium result-play-again-button"
      >
        Play Again
      </a>
    </div>
  );
}
