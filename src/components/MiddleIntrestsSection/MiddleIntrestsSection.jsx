import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import './MiddleIntrestsSection.css'
const MiddleinterestSection = () => {
  // Dynamic data: User's current interest managed with useState, initialized with static data for testing
  const [interest, setinterest] = useState([
    "UI/UX",
    "JAVA",
    "CSS",
    "C++",
    "Python",
    "V+",
    "Figma",
    "Photoshop",
  ]);
  const [color, setcolor] = useState([
    "#F3FDF4",
    "#FDF9F9",
    "#eaead6",
    "#F7F7F7",
  ]);

  // Static data: Suggested interest for testing (not managed by state in this version)
  const suggestedinterest = [
    "UI/UX",
    "JAVA",
    "CSS",
    "C++",
    "UI/UX",
    "JAVA",
    "CSS",
    "C++",
    "Python",
    "V+",
    "Figma",
    "Photoshop",
  ];

  return (
   <div className="middle-interest-mainParent">
     <div className="middle-interest-container">
      {/* Header */}
      <h2 className="middle-interest-header">Interest</h2>

      {/* Search Bar */}
      <div className="middle-interest-search">
        <input type="text" placeholder="Search" />
        {/* Magnifying glass icon could be added here */}
      </div>

      {/* User's Current interest (Dynamic) */}
      <div className="middle-interest-interestAndArrow">
        <div className="middle-interest-arrow-left">
        <MdKeyboardArrowLeft/>
        </div>
        <div className="middle-interest-tags">
          {interest.map((skill, index) => (
            <div
              key={index}
              className="middle-interest-tag "
              style={{ backgroundColor: color[index % color.length] }}

            >
              {skill}
            </div>
          ))}
        </div>
        <div className="middle-interest-arrow-right">
          <MdKeyboardArrowRight/>
        </div>
      </div>

      {/* Prompt */}
      <div className="middle-interest-parentOfPrompt">
        <div className="middle-interest-prompt">
          <p>Add other interest which you have knowledge of</p>
        </div>
      </div>
      {/* Suggested interest (Static) */}
      <div className="middle-interest-suggested-tags">
        {suggestedinterest.map((skill, index) => (
          <div key={index} 
          style={{ backgroundColor: color[index % color.length] }}
          className="middle-interest-tag">
            {skill}
           
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="middle-interest-description">
        <div className="middle-interest-lastParagraph">
          <p>
            interest can present you in better way among others. Also they can
            help to show you related things.
          </p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default MiddleinterestSection;
