import React, { useState, useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FiSearch } from "react-icons/fi"; // Importing search icon
import "./MiddleIntrestsSection.css";

const MiddleinterestSection = () => {
  const [interest, setInterest] = useState([
    "UI/UX", "JAVA", "CSS", "C++", "Python", "V+", "Figma", "Photoshop",
    "Swift", "Kotlin", "SQL", "MongoDB", "React", "Angular", "Node.js"
  ]);

  const [color, setColor] = useState(["#F3FDF4", "#FDF9F9", "#eaead6", "#F7F7F7"]);

  const tagsRef = useRef(null);
  console.log(tagsRef
  );
  
 // Scroll Left
 const scrollLeft = () => {
  if (tagsRef.current) {
    tagsRef.current.scrollLeft -= 200; // Moves left by 200px
  }
};

// Scroll Right
const scrollRight = () => {
  if (tagsRef.current) {
    tagsRef.current.scrollLeft += 200; // Moves right by 200px
  }
};


  return (
    <div className="middle-interest-mainParent">
      <div className="middle-interest-container">
        {/* Header */}
        <h2 className="middle-interest-header">Interest</h2>

        {/* Search Bar with Search Icon */}
        <div className="middle-interest-searchAndIconMain">
          <div className="middle-interest-search">
            <FiSearch className="search-icon" /> {/* Search Icon */}
            <input type="text" placeholder="Search" />
          </div>
        </div>

        {/* User's Current Interests with Left & Right Arrows */}
        <div className="middle-interest-interestAndArrow">
          <IoIosArrowBack 
            className="main-left-arrow" onClick={scrollLeft} />

          <div className="middle-interest-tags-wrapper">
            <div className="middle-interest-tags" ref={tagsRef}>
              {interest.map((skill, index) => (
                <div
                  key={index}
                  className="middle-interest-tag"
                  style={{ backgroundColor: color[index % color.length] }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <IoIosArrowForward 
         
          className="main-right-arrow" onClick={scrollRight} />
        </div>

        {/* Prompt */}
        <div className="middle-interest-parentOfPrompt">
          <div className="middle-interest-prompt">
            <h1>Add other interests which you have knowledge of</h1>
          </div>
        </div>

        {/* Suggested Interests */}
        <div className="middle-interest-suggested-tags">
          {interest.map((skill, index) => (
            <div
              key={index}
              style={{ backgroundColor: color[index % color.length] }}
              className="middle-interest-tag"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="middle-interest-description">
          <div className="middle-interest-lastParagraph">
            <p>
              Interests can present you in a better way among others. Also, they can
              help to show you related things.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="middle-interest-last-buttons">
          <button className="middle-interest-cancel">Cancel</button>
          <button className="middle-interest-save">Save</button>
        </div>
      </div>
    </div>
  );
};

export default MiddleinterestSection;
