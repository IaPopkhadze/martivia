import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cover from "../Assets/bugati.webp";

import pic1 from "../Assets/bugati1.jpg";
import pic2 from "../Assets/car1.png";
import pic3 from "../Assets/cover.webp";
import traqtori from "../Assets/traq.avif";
import traqtori1 from "../Assets/traqtori1.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxDoubleArrowRight } from "react-icons/rx";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { MdOutlineZoomOutMap } from "react-icons/md";
const Vehicles = () => {
  const [imageCurrentIndex, setImageCurrentIndex] = useState(0);
  const [openVehicleDetail, setOpenVehicleDetail] = useState(null);
  const [addAsFav, setAddAsFav] = useState(false);
  const vehicles = [
    {
      img: cover,
      brand: "BMW",
      model: "M5",
      year: 2021,
      engine: "4.4-liter TwinPower Turbo V8",
      price: "$85,000",
    },
    {
      img: cover,
      brand: "Mercedes-Benz",
      model: "AMG GT",
      year: 2022,
      engine: "4.0-liter twin-turbocharged V8",
      price: "$120,000",
    },
    {
      img: cover,
      brand: "Audi",
      model: "RS7",
      year: 2021,
      engine: "4.0-liter twin-turbo V8",
      price: "$95,000",
    },
    {
      img: cover,
      brand: "Porsche",
      model: "911 Carrera S",
      year: 2023,
      engine: "3.0-liter twin-turbo flat-six",
      price: "$115,000",
    },
    {
      img: cover,
      brand: "Lexus",
      model: "LC 500",
      year: 2022,
      engine: "5.0-liter V8",
      price: "$95,000",
    },
    {
      img: cover,
      brand: "Jaguar",
      model: "F-Type R",
      year: 2021,
      engine: "5.0-liter supercharged V8",
      price: "$105,000",
    },
    {
      img: cover,
      brand: "Ferrari",
      model: "812 Superfast",
      year: 2023,
      engine: "6.5-liter V12",
      price: "$350,000",
    },
  ];

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <IoIosArrowBack style={{ color: "red" }} />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: "block", color: "red" }} onClick={onClick}>
        <IoIosArrowForward />
      </div>
    );
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const vehicleSlider = [cover, pic2, pic3, cover, pic3, cover, pic2, pic3, cover, pic3,cover, pic2, pic3, cover, pic3,cover, pic2, pic3, cover, pic3,cover, pic2, pic3, cover, pic3,cover, pic2, pic3, cover, pic3];

  const handlePrevImage = () => {
    setImageCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : vehicleSlider.length - 1));
  };
  
  const handleNextImage = () => {
    setImageCurrentIndex(prevIndex => (prevIndex + 1) % vehicleSlider.length);
  };
  const data = [
    { price: "$50 000 - 1 000", vehicle: "Ford Fustion 199", img: traqtori },
    { price: "$6 000 - 2 000", vehicle: "Mercedes benz 199", img: traqtori },
    { price: "$44 000 - 41 000", vehicle: "Woltsvagen 10", img: traqtori },
    { price: "$70 000 - 4 000", vehicle: "Ford rame 199", img: traqtori },
    { price: "$14 000 - 1 000", vehicle: "Ford Kidv Aca 199", img: traqtori },
    { price: "$5 000 - 1 000", vehicle: "Ford Fustion 199", img: traqtori },
    { price: "$50 000 - 1 000", vehicle: "Ford Manqana 199", img: traqtori },
    { price: "$8 000 - 1 000", vehicle: "Jeep Fustion 199", img: traqtori },
    { price: "$31 000 - 1 000", vehicle: "Porshe Fustion 199", img: traqtori },
    { price: "$55 500 - 1 000", vehicle: "Ford Fustion 199", img: traqtori },
    { price: "$55 000 - 1 000", vehicle: "Ford Fustion 199", img: traqtori },
  ];
  return (
    <div className="vehicles">
      <div className="vehicles_cover_container">
        <img src={traqtori} alt="img" />
        <div className="vehicles_cover_overlay">
          <p className="content_title" style={{marginTop:'4rem'}}>მძიმე ტექნიკა</p>
        </div>
      </div>
      <div className="vehicle_slider">
        <div className="slider_content" style={{zIndex:'99999'}} >
          <Slider {...settings}>
            {data.map((item, index) => {
              return (
                <div className="each_slider_container" key={index}>
                  <img src={item.img} alt="" />

                  <div className="overlay">
                    {/* <div className="price">{item.price} </div> */}
                    <div className="vehicle_name">{item.vehicle}</div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="top_offer" style={{top:'-500px'}} >
          <i style={{fontSize:'1.2rem'}} >კატეგორიები</i>
          <div className="line"></div>
        </div>
      </div>{" "}
      <div className="result" style={{display:'flex', gap:'1rem', alignItems:'center'}}>
        <span>სორტირება </span>
        <div className="sortingLine" style={{width:'100%', height:'0.5px', background:'grey'}}></div>

      </div>
      <div className="vehicles_container">
        {vehicles.map((element, index) => {
          return (
            <div className="each_car_container">
              <div className="left_container">
                <div className="car_img">
                  <img src={traqtori} alt="img" />
                </div>
                <div className="car_description">
                  <div className="description_row">
                    მწარმოებელი: <span>{element.brand}</span>
                  </div>
                  <div className="description_row">
                    მოდელი: <span>{element.model}</span>
                  </div>
                  <div className="description_row">
                    კუბომეტრი: <span>{element.year}</span>
                  </div>
                  <div className="description_row">
                    რამე: <span>{element.engine}</span>
                  </div>
                  <div className="description_row">
                    წონა: <span>{element.price}</span>
                  </div>
                </div>
              </div>
              <div className="right_container">
                <div className="more_btn " onClick={() => setOpenVehicleDetail(true)}>
                  ვრცლად ნახვა
                </div>
              </div>
              {openVehicleDetail && (
                <div className="vehicle_pop_up">
                  <div className="overlay_content">
                    <div className="top_content">
                      <div className="vehicle_name">
                         <span>BMW M3</span>
                      </div>
                      <div className="top_right">
                        <div className="add_favourite" style={addAsFav ? { color: "green" } : null} onClick={() => setAddAsFav(!addAsFav)}>
                          {addAsFav ? "რჩეულებიდან წაშლა" : "რჩეულებში დამატება"} <FaStar />{" "}
                        </div>
                        <IoMdClose className="close_btn" onClick={() => setOpenVehicleDetail(false)} style={{ fontSize: "1.5rem", cursor: "pointer" }} />
                      </div>
                    </div>
                    <div className="middle_content">
                      <div className="vehicle_sliderr">
                        <div className="shown_img">
                          <img src={vehicleSlider[imageCurrentIndex]} alt="" />
                          <MdOutlineZoomOutMap className="zoom_in"/>
                          <div className="shown_img_overlay">
                            
                            <div className="btn_container">
                              {" "}
                              <FaAngleLeft className="btn"  onClick={()=>handlePrevImage()}/>
                              <FaAngleRight className="btn"  onClick={()=>handleNextImage()}/>
                            </div>
                          </div>
                        </div>
                        <div className="img_list">
                          {vehicleSlider.map((item, index) => {
                            return (
                              <div key={index} className="list_child" onClick={() => setImageCurrentIndex(index)}>
                                <img src={item} alt="" />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="vehicle_description">
                        <div className="each_row">
                          <span>მწარმოებელი: </span> BMW
                        </div>
                        <div className="each_row">
                          <span>მოდელი: </span> M3
                        </div>
                        <div className="each_row">
                          <span>ძრავი: </span> 2.5
                        </div>
                        <div className="each_row">
                          <span>ცილინდრი: </span> 8
                        </div>
                        <div className="each_row">
                          <span>გამოშვების წელი: </span> 2017
                        </div>
                        <div className="each_row">
                          <span>ძრავის ტიპი: </span> ბენზინი
                        </div>
                        <div className="each_row">
                          <span>ფასი: </span> $50 000
                        </div>
                      </div>
                    </div>
                    <div className="bottom_content">
                      <div className="moredetail ">აღწერა</div>
                      <div className="detail_info">
                        ეს მანქანა ჩამოყვანილია ამერიკიდანვა სადმეანბაჟებაამაზებთ მოყვება დაზღვევა და რაღაცეები დსლკჯსაეს მანქანა ჩამოყვანილია ამერიკიდან და წავა სადმე რავიცი ვინც იყიდის. ძაან კაი ფასიაქ და რამე რუმე _ ემატება განბაჟება და თურ რამეა ჩვენ გავანბაჟებთ და შევალამაზებთ მოყვება დაზღვევა და რაღაცეები დსლკჯსადაზღვევა და რაღაცეები დსლკჯსა ეს მანქანა ჩამოყვანილია ამერიკიდან და წავა სადმე რავიცი ვინც იყიდის. ძაან კაი ფასიაქ და რამე რუმე _ ემატება განბაჟება და თურ რამეა ჩვენ გავანბაჟებთ და
                        შევალამაზებთ მოყვება დაზღვევა და რაღაცეები დსლკჯსა
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <div className="pagination">
          <div className="btn">
            <RxDoubleArrowLeft />
          </div>
          <div className="page_numbers_container">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div className="btn">
            <RxDoubleArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
