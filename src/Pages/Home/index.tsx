import { HomeCard } from "../../Component/HomeCardComponent";
import { Modal } from "../../Component/ModalComponent";
import { Navbar } from "../../Component/Navbar";
import { categoryArray } from "../../QuizData/data";
import { useHome } from "./context";

export function Home() {
  const { homeState, homeDispatch } = useHome()!;

  function getCategory(categoryName: string) {
    homeDispatch({ type: "getSelectedCategory", payload: categoryName });
    homeDispatch({ type: "setModalToggle", payload:true});
  }
  return (
    <>
      <Navbar />
      <div className="main-content">
        <h2 className="section-heading">Quiz</h2>
        <div className="section-card flex">
          {categoryArray.map(category => (
            <HomeCard
              key={category.name}
              name={category.name}
              image={category.image}
              description={category.description}
              getCategory={getCategory}
            />
          ))}
        </div>
      </div>

      {homeState.modalToggle && (
        <Modal title={"User Info"} inputField={"Enter the name *"} />
      )}
    </>
  );
}
