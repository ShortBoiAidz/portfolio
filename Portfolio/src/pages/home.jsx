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
              <InfoCard

                heading={
                          <h2 className="gradient-text">
                            Brief:
                          </h2>
                        }
                description={
                              <p className="gradient-text">
                                Hello! My name is Arlo. I am a front-end web developer and game
                                developer from Australia with ~2 years experience in JavaScript and
                                ~1 year of experience with Python. I have a solid understanding of
                                React JS and I am currently learning TypeScript.
                              </p>
                            }
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
