import { CategoryArray } from "../../QuizData/dataType";
import "./style.css"

type HomeCardType={
  name: string;
  image: string;
  description: string;
  getCategory:(name:string)=>void;
}

export function HomeCard({ name, image, description, getCategory}:HomeCardType) {


  return (
    <div className="vertical-product-card">
      <div
        className="vertical-product-image"
        style={{
          background: `linear-gradient(rgba(73, 75, 77, 0.1), rgba(73, 75, 77,0.1)), url(${image})`,
          backgroundSize: "contain",
          backgroundRepeat:"no-repeat",
          backgroundPosition:"center"
        }}
      ></div>
      <div className="vertical-product-content-container">
        <div className="vertical-product-heading">
          <span onClick={()=>getCategory(name)} style={{cursor:"pointer"}}>{name}</span>
        </div>
        <div className="grey-text vertical-product-description">
          {description}
        </div>
      </div>
      <button className="primary-button button-small" onClick={()=>getCategory(name)}>Play</button>
    </div>
  );
}
