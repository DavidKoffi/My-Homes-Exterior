import { useContext, useState } from "react";
import "./Carousel.css";
import LeftArrow from "../../assets/Left.png";
import bg from "../../assets/tree-removal-bg.png";
import Tree from "../../assets/Tree.png";
import { JobSelectionContext } from "../../context/JobSelectionContext";
import { useNavigate } from "react-router-dom";

function Carousel() {
  const payload = useContext(JobSelectionContext);

  return (
    <div style={{ position: "relative" }} id="carousel">
      <SlideButton dir="left" handleScroll={payload.Scroll} />
      <SlideButton dir="right" handleScroll={payload.Scroll} />
      <div className="carousel-container">
        {payload.data.map((item, index) => (
          <CarouselItem
            key={index}
            currentIndex={payload.currentIndex}
            data={item}
          />
        ))}
      </div>

      <PrettyButton />
      <SelectionBar
        currentIndex={payload.currentIndex}
        setIndex={payload.setIndex}
        data={payload.data}
      />
    </div>
  );
}

function CarouselItem(props) {
  return (
    <div
      onClick={() => {
        console.log("hi");
      }}
      className="carousel-item"
      style={{
        transform: `translate(-${props.currentIndex * 100}%)`,
        backgroundImage: `url("${bg}")`,
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="desc-container">
        <p className="carousel-item-header">{props.data.header}</p>
        <p className="carousel-item-desc">{props.data.desc}</p>
      </div>
    </div>
  );
}

function SlideButton(props) {
  function PerformScroll() {
    console.log("clicked");
    props.dir == "left" ? props.handleScroll(-1) : props.handleScroll(1);
  }

  return (
    <div className={`circle ${props.dir}`} onClick={PerformScroll}>
      <img
        className={`icon ${props.dir}-arrow`}
        src={LeftArrow}
        alt="Left arrow"
      />
    </div>
  );
}

function SelectionBar(props) {
  return (
    <div className="selection-bar">
      {props.data.map((data, index) => (
        <SelectionBarElement
          icon={data.image}
          selected={index == props.currentIndex}
          index={index}
          setIndex={props.setIndex}
          key={index}
        />
      ))}
    </div>
  );
}

function SelectionBarElement(props) {
  return (
    <div
      className={`circle ${props.selected ? "focused" : ""}`}
      onClick={() => {
        props.setIndex(props.index);
      }}
    >
      <img src={props.icon} alt="icon" className={`selection-item-icon`} />
    </div>
  );
}

function PrettyButton(props) {
  const payload = useContext(JobSelectionContext);
  const navigate = useNavigate();
  return (
    <input
      type={"button"}
      className="get-quote-btn"
      value={"Get Service Now"}
      onClick={() => {
        console.log(payload.currentJob);
        navigate("/request-service");
      }}
    />
  );
}

export default Carousel;
