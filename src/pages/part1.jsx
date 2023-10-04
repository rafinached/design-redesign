import * as React from "react";
/* ADD IMPORTS FROM TODO ON THE NEXT LINE */
import { useWiggle } from "../hooks/wiggle";

export default function part1() {
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */
  const [style, trigger] = useWiggle({ x: 50, rotation: 1, scale: 1.2 });
  return (
    <div className="part_1">
      <h1 className="title">
        Part 1: Design
      </h1>
      <h1 className="subTitles"><u>Line Chart</u></h1>
      <img 
        src="https://cdn.glitch.global/ffa29e6e-7b6a-43c7-9c30-f929f006a7ac/01ed16cd-0373-4271-9d95-189b7285e11c.ss_Chart.png?v=1695256984462" 
        alt="Description of the image"
        className="centered-image"
        width="1000" 
        height="500"
        />
      {/* REPLACE OPENING P TAG BELOW WITH CODE FROM TODO */}
      <div class="context-container">
      <h1 className="subTitles"><u>Chart Rationale</u></h1>
    <p2 className="description">This chart displays data pertaining to enrollments per major at Boston College. The majors being used for analysis here 
      are stem majors and CSOM majors. The idea behind this choice of analysis is to find out if there has been an increase in stem
      majors over the past decade or so. I am comparing against CSOM majors because they have always been popular, therefore making it a
      good comparison. I believe that this data visualization is neat and tells a good story. All the stem and csom majors were included in
      creation of the chart, but I decided to display the top science majors against finance and econ.
    </p2>
  </div>
    </div>
    
  );
}