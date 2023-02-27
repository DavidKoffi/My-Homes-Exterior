import Insured from "../../assets/Insured.png";
import Quality from "../../assets/Quality.png";
import Quote from "../../assets/Quote.png";
import Service from "../../assets/Service.png";
import Online from "../../assets/Online.png";
import Logo from "../../assets/Logo.png";
import "./IntroSection.css";

function IntroSection() {
  return (
    <section className="intro-section-container">
      <img src={Logo} alt="logo" className="logo" />
      <h2 className="tag-line">The DMV’s Online Landscaping Hub</h2>
      <div className="credabilty-graphics-container">
        <div className="img-text-container">
          <img src={Insured} className="credabilty-graphics" />
          <p className="tag">Fully Insured</p>
        </div>
        <div className="img-text-container">
          <img src={Quality} className="credabilty-graphics" />
          <p className="tag">Quality Guareanteed</p>
        </div>
        <div className="img-text-container">
          <img
            src={Quote}
            className="credabilty-graphics"
            style={{ width: "8vw" }}
          />
          <p className="tag">24 Hour Quoting</p>
        </div>
        <div className="img-text-container">
          <img
            src={Service}
            className="credabilty-graphics"
            style={{ width: "9vw" }}
          />
          <p className="tag">Dedicated Support</p>
        </div>
        <div className="img-text-container">
          <img
            src={Online}
            className="credabilty-graphics"
            style={{ width: "9vw" }}
          />
          <p className="tag">Complelty Online</p>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
