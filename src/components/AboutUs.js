import React from "react";
import vehicle from "../Assets/bugati1.jpg";
import video from "../Assets/video.mp4";
const AboutUs = () => {
  return (
    <div className="about_us">
      <p className="about_us_title"> 
      <span>ჩვენს შესახებ</span>
      </p>

      <div className="about_us_content">
        <div className="aboutus_left_side">
         <video src={video} autoPlay controls></video>
        </div>
        <div className="aboutus_right_side">ჩვენი კომპანია დაარსდა 2020 წელს. ჩვენ <br /> <br />ჩვენი კომპანია დაარსდა 2020 წელს. ჩვენი მიზანია რომ  ჩამოვიყვანოთ ავტომანქანების მსოფლიოს სხვადასხვა ქვეყნიდა.  მაგალითად ამერიკიდან, ჩინეთიდან, საფრანგეთიდან, რავიცი რუსეთიდან და ნუ მოკლედ სადაც მანქანაა ყველა ქვეყნიდა. მერე უნდა გავყიდოთ  ჩვენს კლიენტებზე ან რაღაც ასეთი ტექსტი იქნება რა რომელიც აღწერს კომპანიის შესახებ სბსოლიტურად ყველაფერს  <br /> <br />ჩვენი კომპანია დაარსდა 2020 წელს. ჩვენი მიზანია რომ  ჩამოვიყვანოთ ავტომანქანების მსოფლიოს სხვადასხვა ქვეყნიდა.  მაგალითად ამერიკიდან, ჩინეთიდან, საფრანგეთიდან, რავიცი რუსეთიდან და ნუ მოკლედ სადაც მანქანაა ყველა ქვეყნიდა. მერე უნდა გავყიდოთ  ჩვენს კლიენტებზე ან რაღაც ასეთი ტექსტი იქნება რა რომელიც აღწერს კომპანიის შესახებ სბსოლიტურად ყველაფერს</div>
      </div>
    </div>
  );
};

export default AboutUs;
