import * as React from "react";

export default function part2() {
  return (
    <div className='part_2'>
        <h1 className="title">
        Part 2: Redesign
      </h1>
      <h1 className="subTitles"><u>Nightingale Rose Diagram</u></h1>
      <img 
        src="https://cdn.glitch.global/ffa29e6e-7b6a-43c7-9c30-f929f006a7ac/Untitled.png?v=1695257722459"
        alt="Coxcomb Chart"
        className="centered-image"
        width="1000" 
        height="500"
        />
      {/* REPLACE OPENING P TAG BELOW WITH CODE FROM TODO */}
      <div class="context-container">
    <h2 className="subTitles"><u>Analysis and Design Critique</u></h2>
    <p2>The original Coxcomb chart, as pioneered by Florence Nightingale, was designed to visualize the causes of 
        mortality among soldiers during the Crimean War. The Coxcomb chart uses a circular layout, with each 
        segment representing a month of the year. This design was unconventional for its time, but allowed for a 
        clear representation of data over time. Radial axes are used to display the causes of mortality, with each 
        axis radiating from the center of the circle. This design choice aimed to show the distribution of causes 
        around a central point.</p2>
        <p></p>
        <p2>The <u><strong>strengths</strong></u> of the chart are as follows: The chart effectively conveys how causes of mortality varied 
        over the months of the year, highlighting the seasonality of diseases and wounds. It allows viewers to 
        compare the sizes of segments across different months and identify patterns and trends over time. The chart's 
        simplicity and distinctive design emphasize the importance of data visualization for conveying complex 
        information.</p2>
        <p></p>
        <p2>The <u><strong>weaknesses</strong></u> of the chart are as follows: The circular design makes it challenging to precisely compare 
        values between different segments. It's less accurate for detailed data analysis. The Coxcomb chart was 
        unconventional when it was introduced, and modern audiences may find it less intuitive than more common 
        chart types. This design is suitable for visualizing data with a small number of categories and limited 
        time periods. It may become cluttered with more extensive datasets.
        </p2>
  </div>
      <div className="context-container">
        <img
          src="https://cdn.glitch.global/ffa29e6e-7b6a-43c7-9c30-f929f006a7ac/Screen%20Shot%202023-09-21%20at%209.33.29%20PM.png?v=1695346417053"
          alt="redesign"
          className="centered-image"
          width="1000" 
          height="500"
        />
        <h2 className="subTitles"><u>Redesign Rationale</u></h2>
    <p2>The objective of redesigning the Coxcomb chart into a stacked bar chart is to improve the clarity, precision,
         and interpretability of the data visualization while maintaining the focus on the causes of mortality over 
         time. The stacked bar chart uses vertical bars, which provide a more straightforward and precise way to 
         compare the causes of mortality for each month. Each bar is divided into segments representing different 
         causes (Diseases, Wounds, Other). The exact values are visible for each segment, allowing for precise data
         analysis. The stacked bar chart is a common and familiar chart type, making it more accessible to a broader 
         audience. This redesign maintains the original goal of showcasing the causes of mortality over time, and it 
         enhances the audience's ability to understand the data accurately.</p2>
        <p></p>
        <p2>The <u><strong>strengths</strong></u> of the chart are as follows: The chart effectively conveys how causes of mortality varied 
        over the months of the year, highlighting the seasonality of diseases and wounds. It allows viewers to 
        compare the sizes of segments across different months and identify patterns and trends over time. The chart's 
        simplicity and distinctive design emphasize the importance of data visualization for conveying complex 
        information.</p2>
        <h2 className="subTitles"><u>Conclusion</u></h2>
        <p2>In summary, the Coxcomb chart's originality and historical significance are unquestionable. However, 
        for modern data analysis and communication, the stacked bar chart provides a more precise, accessible,
        and familiar means of achieving the same objective—visualizing the causes of mortality over time. 
        It overcomes the limitations of the Coxcomb chart while reztaining the focus on the underlying data.
        </p2>

      </div>
    </div>
    
  );
}
