//& ================================================
//~path Importing styles
import "../css/layout.css";

//& ================================================
//~path Importing modules
import LoadingScreen from "../components/loadingScreen.jsx";
import PersonCard from "../components/personCard";

//& ================================================
//~path Importing images
import haywardImg from "../assets/Hayward.jpg";
import liamImg from "../assets/liam.png";
import joelImg from "../assets/joel.jpg";
import jieImg from "../assets/jie.jpg";
import tizzyImg from "../assets/tizzy.jpg";
import jamesImg from "../assets/james.png";
import indyImg from "../assets/indy.jpg";
import coreyImg from "../assets/coreyGif.gif";

//& ================================================
export function Connections() {
  return (
    <main>
      <LoadingScreen />
      <div className="mainPersonsSection">
        <div className="personCardParent">
          <PersonCard name="Liam" img={liamImg} status="Immune" />
          <PersonCard name="Hayward" img={haywardImg} status="Priority" />
          <PersonCard name="Corey" img={coreyImg} status="Priority" />
          <PersonCard name="Tizzy" img={tizzyImg} status="Priority" />
          <PersonCard name="Jimmy" img={jamesImg} status="Very Close" />
          <PersonCard name="Indy" img={indyImg} status="Very close" />
          <PersonCard name="Joel" img={joelImg} status="Close" />
          <PersonCard name="Jie" img={jieImg} status="Friend" />
        </div>
      </div>
    </main>
  );
}
