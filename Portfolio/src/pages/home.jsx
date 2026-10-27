//~path Importing styles
import "../components/css/titleCard.css"

//& ================================================
//~path Importing modules
import LoadingScreen from "../components/loadingScreen.jsx";
import { TitleCard } from "../components/titleCard.jsx";
import { InfoCard } from "../components/infoCard.jsx";

//& ================================================

export function Home() {
  return (
    <>
      <LoadingScreen />
      <main>
        <div className="mainCardParent">
          <div className="homeCardParent">
            <TitleCard />
            <InfoCard />
          </div>
        </div>
      </main>
    </>
  );
}
