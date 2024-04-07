import React from "react";
import vehicle1 from "../Assets/vehicle2.jpg";
import vehicle2 from "../Assets/vehicle1.jpg";
import { MdLocationPin } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";

const AboutUs = () => {
  return (
    <div className="about_us">
      <div className="box1 ">
        <div className="box1_container">
          <p className="box1_title">ვინ ვართ ჩვენ?</p>
          <p className="box1_content">მარტივია ვართ კომპანია რომელიც წარმატებულად მოღვაწეობს ქართულ ბაზარზე. ჩვენი დახმარებით თქვენ შეგიძლიათ ჩამოიყვანოთ ავტომობილი მსფლიოს სხვადასხვა ქვეყნიდან <br/>  <br/> უსაფრთხოდ და სრული გარანტიით. თქვენ გექნებათ საშუალება მიიღოთ დეტალური ინფორმაცია მთლიანი ფროცესის მიმდინარეობის შესახებ. მარტივია ვართ კომპანია რომელიც წარმატებულად მოღვაწეობს ქართულ ბაზარზე. ჩვენი დახმარებით თქვენ შეგიძლიათ ჩამოიყვანოთ ავტომობილი მსფლიოს სხვადასხვა ქვეყნიდან უსაფრთხოდ და სრული გარანტიით. თქვენ გექნებათ საშუალება მიიღოთ დეტალური</p>
        </div>
      </div>
      <div className="box2">
        <img src={vehicle1} alt="" />
        <div className="box2_overlay"></div>
      </div>
      <div className="box2">
        <img className="box2_img" src={vehicle2} alt="" />
        <div className="box2_overlay"></div>
      </div>
      <div className="box1">
        <div className="box1_container">
          <p className="box1_title">მარტივია.ჯი</p>

          <p className="company_info">
            <p className="info_title">
              <MdLocationPin /> მისამართი:{" "}
            </p>
            <p className="info">საქართველო, თბილისი,კონსტანტინე  21, N 27</p>
          </p>
          <p className="company_info">
            <p className="info_title">
              <BiSolidPhoneCall /> მობილური:{" "}
            </p>
            <p className="info">+995 571 15 30 75</p>
          </p>
          <p className="company_info">
            <p className="info_title" >
              <MdAttachEmail /> ელ-ფოსტა:
            </p>
            <p className="info">martivialogistic@gmail.com</p>
          </p>
          <p className="company_info">
            <p className="info_title">
              <MdAttachEmail />აქ რამე :
            </p>
            <p className="info">აქ შეიძლება კიდევ რამის ჩამატება</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
