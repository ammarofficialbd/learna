import React, { useState, useEffect, useRef } from "react";
import "./page.css"; // Import your CSS file
import left from "./../../img/icons8-back-to-50.png";
import right from "./../../img/icons8-next-page-50.png";
import { FcLike } from "react-icons/fc";
import axios from "axios";
import Loading from "./Loading";

const Courses = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const myRef = useRef(null);
  /* const [currentIndex, setCurrentIndex] = useState(0);  */
  /*   const slides = [
    // Your slide data goes here, e.g., an array of objects with card information
    {
      id: 1,
      img: "http://dummyimage.com/108x126.png/ff4444/ffffff",
      title: "Learning HTML A to Z Bootcamp 2023 Edition With 2 Project",
      mentor: "Emmalyn Kimpton",
      rating: 73,
      price: "$4118.83",
    },
    {
      "id": 2,
      "img": "http://dummyimage.com/241x132.png/cc0000/ffffff",
      "title": "Learning CSS Basic to Advance",
      "mentor": "Kamilah Chasen",
      "rating": 71,
      "price": "$4725.72"
  },
  {
      "id": 3,
      "img": "http://dummyimage.com/263x109.png/dddddd/000000",
      "title": "Quality Control Specialist",
      "mentor": "Bertrand Boundey",
      "rating": 61,
      "price": "$7125.58"
  },
  {
      "id": 4,
      "img": "http://dummyimage.com/163x149.png/ff4444/ffffff",
      "title": "Assistant Professor",
      "mentor": "Sampson Peattie",
      "rating": 81,
      "price": "$6937.66"
  },
  {
      "id": 5,
      "img": "http://dummyimage.com/134x128.png/dddddd/000000",
      "title": "Senior Editor",
      "mentor": "Joell Garfitt",
      "rating": 64,
      "price": "$6250.24"
  },
  {
      "id": 6,
      "img": "http://dummyimage.com/179x102.png/5fa2dd/ffffff",
      "title": "Executive Secretary",
      "mentor": "Analise Kringe",
      "rating": 27,
      "price": "$6887.17"
  },
  {
      "id": 7,
      "img": "http://dummyimage.com/189x114.png/dddddd/000000",
      "title": "Javascript Basic to Advance with 2 projects",
      "mentor": "Zara MacQuarrie",
      "rating": 7,
      "price": "$9787.33"
  }
  ]; */

 // const slides = [];
  //const totalSlides = data.length; // Set the total number of slides

  //console.log(box);

  const nextSlide = () => {
    var slider = document.getElementById("slider");
    var boxWidth = document.getElementById("slider-card").offsetWidth;
    console.log(boxWidth);
    slider.scrollLeft = slider.scrollLeft + boxWidth * 2;
    toggleButton();
  };

  const prevSlide = () => {
    var slider = document.getElementById("slider");
    var boxWidth = document.getElementById("slider-card").offsetWidth;
    // console.log(boxWidth);
    slider.scrollLeft = slider.scrollLeft - boxWidth * 2;
  };

  const toggleButton = () => {
    const element = myRef.current;
    // Access the current property of the ref
    console.log(element);
    // Check if the element exists before updating styles
    if (element) {
      // Define your styles as a JavaScript object
      const myStyles = {
        display: "block",
        // Add more styles as needed
      };
      // Apply styles to the element

      Object.assign(element.style, myStyles);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set loading to true while the data is being fetched
        setLoading(true);
        // Simulate a longer loading time (e.g., 3 seconds)
        await new Promise(resolve => setTimeout(resolve, 3000));
        // Make a GET request to the server
        const response = await axios.get("http://localhost:8080/CData");

        // Set the fetched data to the state
        setData(response.data);

        // Set loading to false after the data is fetched
        setLoading(false);
      } catch (error) {
        // Set loading to false if there's an error
        setLoading(false);

        // Set the error to the state
        setError(error);
      }
    };

    // Call the fetchData function
    fetchData();
    //For Slider Running
    const interval = setInterval(() => {
      nextSlide();
      console.log("Interval is running...");
    }, 4000); // Change the interval as needed (in milliseconds)

    const stopInterval = setInterval(() => {
      fetchData();
    }, 20000);

    return () => {
      clearInterval(interval);
      clearInterval(stopInterval);
      console.log("Interval stopped.");
    };
    // Stop the interval after 5 seconds
  }, []);

  if (loading) {
   /*  setTimeout(() => {
      <p> Loading .....</p>;
    }, 2000); */
    return  <p className="text-center"> <Loading />  </p>
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className="card-slider-container px-20">
      <img
        src={left}
        className="slider-icon left"
        onClick={prevSlide}
        id="prevButton"
        ref={myRef}
        alt=""
      />

      <div className="card-slider" id="slider">
        {data.map((item, index) => (
          <div className="card w-15" key={index}>
            <div className="slider-card" id="slider-card">
              <div>
                <img
                  src={item.img}
                  alt=""
                  className="w-15 ob-cover box-shadow-1"
                  style={{ width: "240px", height: "135px" }}
                />
              </div>
              <div className="text-area px-2">
                <h5 className="mb-2 font-size-16 mt-8 w-full">
                  {`${item.title.split(" ").slice(0, 7).join(" ") + "..."}`}
                </h5>
                <span className="text-xsm text-bold-2"> {item.mentor} </span>
                <div className="rating d-flex items-center">
                  <span className="text-base pr-4 text-bold-2"> {item.rating}</span>
                  <div class="rating py-3 pr-2">
                    <span class="star checked"></span>
                    <span class="star checked"></span>
                    <span class="star checked"></span>
                    <span class="star "></span>
                    <span class="star"></span>
                  </div>
                  <div className="text-sm text-bold"> ( 2,23256 )</div>
                </div>
                <div className="price text-lg text-bold-2">
                  <span> &#2547; </span>
                  {item.price}
                </div>
              </div>
            </div>
            {/* <!-- Hover content --> */}
            <div className="hover-content w-20 box-shadow-1 px-20 py-6">
              <h4 className="px-0">
                The Complete Python Bootcamp From Zero to Hero in Python
              </h4>
              <p>Upadated july 2023</p>
              <div className="d-flex justify-start gap-1">
                <li> 22 Hours</li> <li> All Levels </li>
              </div>
              {/*   <p>
                Learn Python like a Professional Start from the basics and go all
                the way to creating your own applications and games
                <ul className="list-items">
                  <li className="text-slate-600 pb-4">
                    You will learn how to leverage the power of Python to solve
                    tasks.
                  </li>
                  <li className="text-slate-600 pb-4">
                    You will build games and programs that use Python libraries.
                  </li>
                  <li className="text-slate-600">
                    You will be able to use Python for your own work problems or
                    personal projects.
                  </li>
                </ul>
              </p> */}
              <div className="d-flex gap-1 items-center">
                <button className="btn btn-outline px-10 w-full font-size-18 btn-out-default">
                  {" "}
                  Enroll{" "}
                </button>
                <div className="w-4 love rounded-full border-grey-600 text-center">
                  <FcLike className="text-center like-icon" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src={right}
        className="slider-icon right"
        onClick={nextSlide}
        id="nextButton"
        alt=""
      />
    </div>
  );
};

export default Courses;
