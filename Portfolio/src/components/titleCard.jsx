//~path Importing styles
import "./css/titleCard.css";

//& ================================================
//~path Importing images
import profilePicture from "../assets/pfp.png";

//& ================================================

export function TitleCard() {
  const THEME = "Purple";

  return (
    <>
      <img
        src={profilePicture}
        alt="ShortBoi's PFP"
        className="logo"
        id="logo"
      />
      <div className="homeCard">
        <h1 className="gradient-text">ShortBoi's Bio</h1>

        <br />

        <sub className="gradient-text">Extra stuff about me !!</sub>

        <br />

        <h4 className="gradient-text">Current Theme: {THEME}</h4>
      </div>
    </>
  );
}
