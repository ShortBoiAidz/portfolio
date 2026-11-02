//& ================================================
//~path Importing styles
import "./css/infoCard.css";

//& ================================================

export function InfoCard(props) {
  return (
    <>
      <div className="infoCardParent">
        <div className="infoCard">
          {props.heading}
          {props.description}

          <h2 className="gradient-text">Details:</h2>
          <ul>
            <li>
              <p className="gradient-text">
                <b>Age: </b>16
              </p>
            </li>
            <li>
              <p className="gradient-text">
                <b>Location: </b>Australia (AEST)
              </p>
            </li>
            <li>
              <p className="gradient-text">
                <b>Availability: </b>5:00–8:00 | 16:00–21:00
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
