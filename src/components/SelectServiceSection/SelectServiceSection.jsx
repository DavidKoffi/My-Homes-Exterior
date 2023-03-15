import "./SelectServiceSection.css";
import { useContext } from "react";
import { JobSelectionContext } from "../../context/JobSelectionContext";

function SelectServiceSection() {
  const payload = useContext(JobSelectionContext);
  return (
    <section className="service-selection-container">
      <p className="header-text">Select Your Required Service</p>
      <div className="service-grid">
        {payload.data.map((data, index) => (
          <ServiceElement
            img={data.image}
            service={data.header}
            index={index}
            setIndex={payload.setIndex}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}

export default SelectServiceSection;

function ServiceElement(props) {
  return (
    <div
      className="grid-element"
      onClick={() => {
        props.setIndex(props.index);
        const carousel = document.getElementById("carousel");
        carousel.scrollIntoView({ behavior: "smooth", block: "center" });
      }}
    >
      <img src={props.img} alt="Service Image" className="grid-element-image" />
      <p>{props.service}</p>
    </div>
  );
}
