import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cover from "../Assets/bugati.webp";
import pic1 from "../Assets/bugati1.jpg";
import pic2 from "../Assets/car1.png";
import pic3 from "../Assets/cover.webp";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxDoubleArrowRight } from "react-icons/rx";
import { RxDoubleArrowLeft } from "react-icons/rx";

const Vehicles = () => {
  const [activeFilterIndex, setActiveFilterIndex] = useState(null);
  const [openVehicleDetail, setOpenVehicleDetail] = useState(null);
  const handleFilterClick = (index) => {
    setActiveFilterIndex(index === activeFilterIndex ? null : index);
  };
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
  const [filter, setFilter] = useState(["ქვეყანა", "ფასი", "წელი", "მწარმოებელი", "მოდელი"]);
  const [locations, setLocation] = useState(["საქართველო", "სამხრეთ ამერიკა", "გერმანია", "კორეა"]);
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
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

  const data = [
    { price: "$50 000 - 1 000", vehicle: "Ford Fustion 199", img: cover },
    { price: "$6 000 - 2 000", vehicle: "Mercedes benz 199", img: pic1 },
    { price: "$44 000 - 41 000", vehicle: "Woltsvagen 10", img: pic2 },
    { price: "$70 000 - 4 000", vehicle: "Ford rame 199", img: cover },
    { price: "$14 000 - 1 000", vehicle: "Ford Kidv Aca 199", img: pic3 },
    { price: "$5 000 - 1 000", vehicle: "Ford Fustion 199", img: cover },
    { price: "$50 000 - 1 000", vehicle: "Ford Manqana 199", img: pic1 },
    { price: "$8 000 - 1 000", vehicle: "Jeep Fustion 199", img: cover },
    { price: "$31 000 - 1 000", vehicle: "Porshe Fustion 199", img: pic1 },
    { price: "$55 500 - 1 000", vehicle: "Ford Fustion 199", img: cover },
    { price: "$55 000 - 1 000", vehicle: "Ford Fustion 199", img: pic1 },
  ];
  return (
    <div className="vehicles">
      <div className="vehicles_cover_container">
        <img src={cover} alt="img" />
        <div className="vehicles_cover_overlay">
          <p className="content_title">მოიძიეთ თქვენთვის სასურველი ავტომობილი</p>
          <div className="sorting_fields">
            {activeFilterIndex !== null && activeFilterIndex >= 0 ? <div className="filter_background_overlay" onClick={() => setActiveFilterIndex(null)}></div> : null}

            {filter.map((element, index) => {
              return (
                <div className="each_field_container">
                  <div className="field_title" onClick={() => handleFilterClick(index)}>
                    {element} <IoIosArrowDown />
                  </div>
                  {activeFilterIndex === index ? (
                    <div className="sorting_field_overlay">
                      {(activeFilterIndex == 0 || activeFilterIndex == 3 || activeFilterIndex == 4) && (
                        <div className="style1">
                          {locations.map((element, index) => {
                            return (
                              <div className="row" key={index}>
                                <input type="checkbox" id={`checkbox-${index}`} className="check_box" />
                                <label htmlFor={`checkbox-${index}`} className="title">
                                  {element}
                                </label>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      {(activeFilterIndex == 1 || activeFilterIndex == 2) && (
                        <div className="style2">
                          <div>
                            <input type="text" className="range" placeholder="დან" />
                            <div className="static_range_container">
                              <span>$1 000</span>
                              <span>$5 000</span>
                              <span>$7 000</span>
                              <span>$10 000</span>
                              <span>$12 000</span>
                              <span>$25 000</span>
                              <span>$50 000</span>
                            </div>
                          </div>
                          <div>
                            <input type="text" className="range" placeholder="მდე" />
                            <div className="static_range_container">
                              <span>$1 000</span>
                              <span>$5 000</span>
                              <span>$7 000</span>
                              <span>$10 000</span>
                              <span>$12 000</span>
                              <span>$25 000</span>
                              <span>$50 000</span>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="choose" onClick={() => setActiveFilterIndex(null)}>
                        არჩევა
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="vehicle_slider">
        <div className="slider_content">
          <Slider {...settings}>
            {data.map((item, index) => {
              return (
                <div className="each_slider_container" key={index}>
                  <img src={item.img} alt="" />

                  <div className="overlay">
                    <div className="price">{item.price} </div>
                    <div className="vehicle_name">{item.vehicle}</div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="top_offer">
          ტოპ შეთავაზებები
          <div className="line"></div>
        </div>
      </div>{" "}
      <div className="result">
        <span>შედეგი</span>
        <span>სულ - 342 ავტომობილი</span>
      </div>
      <div className="vehicles_container">
        {vehicles.map((element, index) => {
          return (
            <div className="each_car_container">
              <div className="left_container">
                <div className="car_img">
                  <img src={cover} alt="img" />
                </div>
                <div className="car_description">
                  <div className="description_row">
                    მწარმოებელი: <span>{element.brand}</span>
                  </div>
                  <div className="description_row">
                    მოდელი: <span>{element.model}</span>
                  </div>
                  <div className="description_row">
                    წლი: <span>{element.year}</span>
                  </div>
                  <div className="description_row">
                    ძრავი: <span>{element.engine}</span>
                  </div>
                  <div className="description_row">
                    ფასი: <span>{element.price}</span>
                  </div>
                </div>
              </div>
              <div className="right_container">
                <div className="more_btn" onClick={() => setOpenVehicleDetail(true)}>
                  ვრცლად ნახვა
                </div>
              </div>
              {openVehicleDetail && (
                <div className="vehicle_pop_up">
                  <div className="pop_up_container">
                    <div className="close" onClick={() => setOpenVehicleDetail(false)}>
                      X
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
            <span>4</span>
            <span>5</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
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
