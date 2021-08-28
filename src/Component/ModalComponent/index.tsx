import userImg from "../../assets/svg/userImg.svg";
import { useNavigate } from "react-router-dom";
import { ModalType } from "./type";
import { useModal } from "./context";
import { useHome } from "../../Pages/Home/context";

export function Modal({ title, inputField }: ModalType) {
  const navigate = useNavigate();

  const { modalState, modalDispatch } = useModal()!;
  const { homeDispatch } = useHome()!;

  const playQuiz = () => {
    if (modalState.name === "") {
      modalDispatch({ type: "setRouteAndError", payload: true });
    } else {
      navigate("/quiz");
      homeDispatch({ type: "setModalToggle", payload: false });
    }
  };

  const closeModal = () => {
    modalDispatch({ type: "getName", payload: "" });
    modalDispatch({ type: "setRouteAndError", payload: false });
    homeDispatch({ type: "setModalToggle", payload: false });
  };
  return (
    <>
      <div className="modal-container">
        <div className="modal-card margin-bottom">
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
          </div>
          <div className="modal-card-body">
            <div className="input-container">
              <span className="inside-input-info grey-text">
                <span className="input-img">
                  <img className="xs-avatar" src={userImg} alt="no-avatar" />
                </span>
                <span className="input-line">|</span>
              </span>
              <input
                type="text"
                placeholder={inputField}
                className={`input-field ${modalState.error && "error-input"}`}
                onChange={e =>
                  modalDispatch({ type: "getName", payload: e.target.value })
                }
              />
              {modalState.error && (
                <div className="error-container small-text">
                  Please enter the {inputField}
                </div>
              )}
            </div>
          </div>
          <div className="modal-footer">
            <button
              className="light-button button-small margin-right"
              onClick={() => closeModal()}
            >
              Cancel
            </button>
            <button
              className="primary-button button-small"
              onClick={() => playQuiz()}
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
