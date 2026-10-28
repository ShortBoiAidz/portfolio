//& ================================================
//~path Importing modules
import LoadingScreen from "../components/loadingScreen.jsx";
import { TitleCard } from "../components/titleCard.jsx";
import { InfoCard } from "../components/infoCard.jsx";

//& ================================================
//~path Importing images
import profilePicture from "../assets/pfp.png";

//& ================================================

export function Home() {
  return (
    <>
      <LoadingScreen />
      <main>
        <div className="content">
          <img
            src={profilePicture}
            alt="ShortBoi's PFP"
            className="logo"
            id="logo"
          />
          <div className="mainCardParent">
            <div className="homeCardParent">
              <TitleCard />
              <InfoCard />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
