import "./home.css";
import Carousel from ".././components/Carousel/Carousel";
import IntroSection from ".././components/IntroSection/IntroSection";
import SelectServiceSection from ".././components/SelectServiceSection/SelectServiceSection";

function Home(props) {
  return (
    <div className="home">
      <IntroSection />
      <SelectServiceSection />
      <Carousel />
    </div>
  );
}

export default Home;
