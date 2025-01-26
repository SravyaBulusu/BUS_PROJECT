import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./businfo1.css";
// import BusIcon from "../GPS_Prpject_assets/bus.png";

// import SearchIcon from "../GPS_Prpject_assets/search.png";
// import LocationIcon from "../GPS_Prpject_assets/gps.png";
import { FaBus } from "react-icons/fa6";
// import backGround from "../GPS_Prpject_assets/dotted-patter-1.png";
// import BgDots from "../GPS_Prpject_assets/slider-dots.png";
import { FaFilter } from "react-icons/fa";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


const busGroundData = [
  {
    ground: "Rajahmundry Ground",
    cities: ["Rajahmundry", "Kovvur", "Ragam Peta"],
  },
  {
    ground: "Kakinada Ground",
    cities: ["Kakinada", "Pedda Puram", "Samalkota", "yanam"],
  },
  {
    ground: "Pithapuram Ground",
    cities: ["Pithapuram", "Gollaprolu", "Bikavolu"],
  },
];


const BusInfo = ({ busData = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [expandedGround, setExpandedGround] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleGroundToggle = (ground) => {
    setExpandedGround(expandedGround === ground ? "" : ground);
  };

  const filteredBuses = busData.filter((bus) => {
    const matchesSearchTerm =
      bus.busno.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bus.busroute.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSelectedCity = !selectedCity || bus.busroute === selectedCity;
    return matchesSearchTerm && matchesSelectedCity;
  });

  const slides = [
    {
      title: "Rajahmundry Ground",
      description: "Near Pharmacy Block",
      image:
        `${process.env.PUBLIC_URL}/assets/images/ground3.jpeg`
    },
    {
      title: "Kakinada Ground",
      description: "Near Ball Canteens",
      image:
        `${process.env.PUBLIC_URL}/assets/images/ground4.jpeg`
    },
    {
      title: "Pithapuram Ground",
      description: "Near Ramanujan Bhavan",
      image:
        `${process.env.PUBLIC_URL}/assets/images/ground5.jpeg`
    }
  ];


  function useTilt(active) {
    const ref = React.useRef(null);

    React.useEffect(() => {
      if (!ref.current || !active) {
        return;
      }

      const state = {
        rect: undefined,
        mouseX: undefined,
        mouseY: undefined
      };

      let el = ref.current;

      const handleMouseMove = (e) => {
        if (!el) {
          return;
        }
        if (!state.rect) {
          state.rect = el.getBoundingClientRect();
        }
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
        const px = (state.mouseX - state.rect.left) / state.rect.width;
        const py = (state.mouseY - state.rect.top) / state.rect.height;

        el.style.setProperty("--px", px);
        el.style.setProperty("--py", py);
      };

      el.addEventListener("mousemove", handleMouseMove);

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
      };
    }, [active]);

    return ref;
  }

  const initialState = {
    slideIndex: 0
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "20%",
    className: "center",
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "10%",
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0%",
          slidesToShow: 1
        }
      }
    ]
  };

  const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % slides.length
      };
    }
    if (event.type === "PREV") {
      return {
        ...state,
        slideIndex: (state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1)
      };
    }
  };

  function Slide({ slide, offset }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);

    return (
      <div
        ref={ref}
        className="slide"
        data-active={active}
        style={{
          "--offset": offset,
          "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
        }}
      >
        <div
          className="slideBackground"
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
        />
        <div
          className="slideContent"
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
        >
          <div className="slideContentInner">
            <div className="slideTitle">{slide.title}</div>
            <div className="slideSubtitle">{slide.subtitle}</div>
            <p className="slideDescription">{slide.description}</p>
          </div>
        </div>
      </div>
    );
  }

  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "NEXT" });
    }, settings.autoplaySpeed);

    return () => clearInterval(interval);
  }, [settings.autoplaySpeed]);

  const history = useHistory();

  // const handleNavigate = (BusId) => {
  //   history.push(`/startwork/${BusId}`);
  //   history.push('/startwork', {
  //     state: {
  //       id: BusId
  //     }
  //   })
  // };

  const handleNavigate = (BusId) => {
    history.push({
      pathname: '/startwork',
      state: { id: BusId }
    });
  };

  return (
    <div className="BusInfoPage">
      <div className="BusInfo_Slick">
        <div className="slides"  >
          <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

          {[...slides, ...slides, ...slides].map((slide, i) => {
            let offset = slides.length + (state.slideIndex - i);
            return <Slide slide={slide} offset={offset} key={i} />;
          })}
          <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
        </div>
      </div>
      <div className="BusInfo_MainPage">
        <div className="BGColorAnimations1"></div>
        <div className="BGColorAnimations2"></div>
        <img src={`${process.env.PUBLIC_URL}/assets/images/slider-dots.png`} className="rotated_circle1"></img>
        <img src={`${process.env.PUBLIC_URL}/assets/images/slider-dots.png`} className="rotated_circle2"></img>
        <img src={`${process.env.PUBLIC_URL}/assets/images/dotted-patter-1.png`} className="BusInfo_BG"></img>
        <div className="FilterIcon">
          <FaFilter />
        </div>
        <div className="BusInfo_FilterBox">
          <div className="FilterBox_Heading">Filters</div>
          <div className="FilterBoxMain">
            {busGroundData.map((busGround) => (
              <details
                key={busGround.ground}
                open={expandedGround === busGround.ground}
                onClick={() => handleGroundToggle(busGround.ground)}
              >
                <summary className="Ground">
                  <div className="LocationIcon">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/gps.png`}
                      className="LocationIconImage"
                      alt="Location Icon"
                    />
                  </div>
                  {busGround.ground}
                </summary>
                <div className="FilterBoxGround">
                  {busGround.cities.map((city) => (
                    <div key={city}>
                      <input
                        type="radio"
                        id={city}
                        name="city"
                        value={city}
                        onChange={handleCityChange}
                        checked={selectedCity === city}
                      />
                      &nbsp;
                      <label id={city}>{city}</label>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="BusInfo_Content">
          <br />
          <br />
          <div className="BusInfo_SearchBarDiv">
            <div className="BusInfo_SearchBar">
              <input
                type="text"
                className="SearchBar"
                placeholder="Search with Bus Number / Bus Route"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <img src={`${process.env.PUBLIC_URL}/assets/images/search.png`} className="SearchIcon" alt="Search Icon" />
            </div>
          </div>
          <br />

          <div className="BusInfo_BusCards">
            {filteredBuses.length > 0 ? (
              filteredBuses.map((bus, index) => (
                <div key={index} className="BusInfo_Card">
                  <div className="CardHeading">
                    <div className="BusIcon">
                      <FaBus />
                    </div>
                    &nbsp;

                    <div className="BusNumber">
                      <b >Bus Name:</b> &nbsp;{bus.busno}
                    </div>
                    <div className="BusCard_Animation"></div>
                  </div>
                  <div className="CardContent">
                    <div className="KeyName">
                      <b >Route:</b> &nbsp;{bus.busroute}
                    </div>
                    {/* <br /> */}
                    <div className="KeyName">
                      <b >BusCapcity:</b> &nbsp;{bus.buscapacity}
                    </div>
                    {/* <br /> */}
                    <div className="KeyName">
                      <b >Ground:</b> &nbsp;{bus.busground}
                    </div>
                    {/* <br /> */}
                    <div className="KeyName">
                      <b >Departure Time:</b> &nbsp;
                      {bus.bustartingtime}
                    </div>
                    {/* <br /> */}
                  </div>
                  <div className="CardDetails">
                    <button className="BusPageButton" onClick={() => handleNavigate(bus._id)}>View details</button>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ color: "white" }}>No buses found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusInfo;
