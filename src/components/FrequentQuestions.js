import React, { useEffect } from "react";
import { FaPersonCircleQuestion } from "react-icons/fa6";

const FrequentQuestions = () => {
  useEffect(() => {
    const answerContainers = document.querySelectorAll(".answer");

    function handleScroll() {
      const triggerBottom = window.innerHeight * 0.9; // Adjust trigger point as needed
      answerContainers.forEach((container) => {
        const containerTop = container.getBoundingClientRect().top;
        if (containerTop < triggerBottom) {
          container.classList.add("show");
        } else {
          container.classList.remove("show");
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Frequent_questions" >
      <p className="frequent_question_title">ხშირად დასმული კითხვები...</p>
      <div className="each_question_container">
        <div className="each_question_container-content">
          <div className="question">
            <FaPersonCircleQuestion style={{ fontSize: "3rem" }} /> აქ იქნება ზოგადი კითხვები, მაგალითად აი
            მანქანას ჯიგრულ პონტში ჩამომიყვან ძმაო და ეგეთი რაღაცეები
          </div>
          <div className="answer">აქ იქნება პარუსები, მაგალითად: კი აბა რა ჯიგარო მანქანას ჩამოგიყვანთ და
            გაჩუქებთ აბა რას ვიზავთ მაგაზე ხოარ გაწყენინებთ</div>
        </div>
      </div>

      <div className="each_question_container">
        <div className="each_question_container-content">
          <div className="question">
            <FaPersonCircleQuestion style={{ fontSize: "3rem" }} /> ეს მეორე კითხვაა
          </div>
          <div className="answer">აქ იქნება პარუსები, მაგალითად: კი აბა რა ჯიგარო მანქანას ჩამოგიყვანთ და
            გაჩუქებთ აბა რას ვიზავთ მაგაზე ხოარ გაწყენინებთ</div>
        </div>
      </div>
      <div className="each_question_container">
        <div className="each_question_container-content">
          <div className="question">
            <FaPersonCircleQuestion style={{ fontSize: "3rem" }} /> აქ იქნება ზოგადი კითხვები, მაგალითად აი
            მანქანას ჯიგრულ პონტში ჩამომიყვან ძმაო და ეგეთი რაღაცეები
          </div>
          <div className="answer">აქ იქნება პარუსები, მაგალითად: კი აბა რა ჯიგარო მანქანას ჩამოგიყვანთ და
            გაჩუქებთ აბა რას ვიზავთ მაგაზე ხოარ გაწყენინებთ</div>
        </div>
      </div>
      <div className="each_question_container">
        <div className="each_question_container-content">
          <div className="question">
            <FaPersonCircleQuestion style={{ fontSize: "3rem" }} /> აქ იქნება ზოგადი კითხვები, მაგალითად აი
            მანქანას ჯიგრულ პონტში ჩამომიყვან ძმაო და ეგეთი რაღაცეები
          </div>
          <div className="answer">აქ იქნება პარუსები, მაგალითად: კი აბა რა ჯიგარო მანქანას ჩამოგიყვანთ და
            გაჩუქებთ აბა რას ვიზავთ მაგაზე ხოარ გაწყენინებთ</div>
        </div>
      </div>
      <div className="each_question_container">
        <div className="each_question_container-content">
          <div className="question">
            <FaPersonCircleQuestion style={{ fontSize: "3rem" }} /> აქ იქნება ზოგადი კითხვები, მაგალითად აი
            მანქანას ჯიგრულ პონტში ჩამომიყვან ძმაო და ეგეთი რაღაცეები
          </div>
          <div className="answer">აქ იქნება პარუსები, მაგალითად: კი აბა რა ჯიგარო მანქანას ჩამოგიყვანთ და
            გაჩუქებთ აბა რას ვიზავთ მაგაზე ხოარ გაწყენინებთ</div>
        </div>
      </div>
      <div className="each_question_container">
        <div className="each_question_container-content">
          <div className="question">
            <FaPersonCircleQuestion style={{ fontSize: "3rem" }} /> აქ იქნება ზოგადი კითხვები, მაგალითად აი
            მანქანას ჯიგრულ პონტში ჩამომიყვან ძმაო და ეგეთი რაღაცეები
          </div>
          <div className="answer">აქ იქნება პარუსები, მაგალითად: კი აბა რა ჯიგარო მანქანას ჩამოგიყვანთ და
            გაჩუქებთ აბა რას ვიზავთ მაგაზე ხოარ გაწყენინებთ</div>
        </div>
      </div>
    </div>
  );
};

export default FrequentQuestions;
