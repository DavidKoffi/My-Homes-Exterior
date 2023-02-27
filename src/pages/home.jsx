import "./home.css";
import Carousel from ".././components/Carousel/Carousel";
import IntroSection from ".././components/IntroSection/IntroSection";
import SelectServiceSection from ".././components/SelectServiceSection/SelectServiceSection";
import { JobSelectionContext } from ".././context/JobSelectionContext";
import { useState } from "react";

import Tree from ".././assets/Tree.png";
import Mulch from ".././assets/Mulch.png";
import Design from ".././assets/Design.png";
import Cleaning from ".././assets/CLeaning.png";
import Trimming from ".././assets/Trimming.png";
import Planting from ".././assets/Planting.png";
import Sod from ".././assets/Sod.png";
import Hardscape from ".././assets/Hardscape.png";
import Spring from ".././assets/Spring.png";
const data = [
  {
    header: "Tree & Stump Removal",
    desc: "We alleviate your worries with our efficient tree extraction and stump grinding services.",
    image: Tree,
  },
  {
    header: "Mulch  ",
    desc: "We lay down a variety of double shredded mulch types based on your preference to have your property looking clean and crisp",
    image: Mulch,
  },
  {
    header: "Landscape & Design",
    desc: "Ipsum Lorem ",
    image: Design,
  },
  {
    header: "Leaf Removal",
    desc: "We will remove all leaves and debris from your home to be disposed of at the recycling center ",
    image: Cleaning,
  },
  {
    header: "Plant Trimming",
    desc: "From smaller bushes to larger trees, we can remove any disturbing overgrowth or decayed limbs to declutter and beautify ",
    image: Trimming,
  },
  {
    header: "Planting",
    desc: "We can handle any new or replacement installations you request. Whether from your own local nursery or sourced by us, our only limit to plant variety is the climate.",
    image: Planting,
  },
  {
    header: "Sod",
    desc: "Our sod is freshly cut within 24 hours of installation We use fresh cut sod to install, repair, or replace any areas in your lawn that need it.",
    image: Sod,
  },
  {
    header: "Hardscape",
    desc: "Design an outdoor living space that is ideal for hosting guests and entertaining.",
    image: Hardscape,
  },
  {
    header: "Spring Cleaning",
    desc: "Any remaining debris and plant overgrowth from the indoor season will be removed and hauled away to get your yard ready for summer. We recommend that you also request new mulch to have your residence looking as fresh as possible",
    image: Spring,
  },
];
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
