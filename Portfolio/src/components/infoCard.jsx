//& ================================================
//~path Importing styles
import "./css/infoCard.css";

//& ================================================

export function InfoCard() {
  return (
    <>
      <div className="infoCardParent">
        <div className="infoCard">
          <h2 className="gradient-text">Brief:</h2>
          <p className="gradient-text">
            Hello! My name is Arlo. I am a front-end web developer and game
            developer from Australia with ~2 years experience in JavaScript and
            ~1 year of experience with Python. I have a solid understanding of
            React JS and I am currently learning TypeScript.
          </p>

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
