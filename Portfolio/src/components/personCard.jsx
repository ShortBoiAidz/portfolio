//& ================================================
//~path Importing styles
import "./css/personCard.css";

//& ================================================

function PersonCard(props) {
  return (
    <div className="personCard">
      <img src={props.img} className="personImg" />
      <h2 className="gradient-text">{props.name}</h2>
      <div className="personInfoCard">
        <h3>{props.status}</h3>
      </div>
    </div>
  );
}

export default PersonCard;
