import React, { useState, useEffect } from "react";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./ReviewPage.css";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
function ReviewPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/reviewData");
        setData(response.data.reviewData);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      } finally {
        // Set loading to false, as the request is complete
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // The empty dependency array ensures that the effect runs once when the component mounts

  // Display loading state
  if (loading) return <p className="text-center">Loading...</p>;

  // Display error state
  if (error) return <p className="text-center">Error: {error.message}</p>;

   //console.log(data)

     // Ensure data is an array before mapping over it
  if (!Array.isArray(data)) {
    console.error("Data is not an array:", data);
    return null; // or handle this case as appropriate for your application
  }
  // Display the fetched data
  return (
    <div className=" container-xl mx-auto py-20">
      <h2 className="text-slate-600 text-center pb-20">
        How learners like you are achieving their goals and their reviews
      </h2>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Autoplay]}
        >
          {data.map ((item) => (
            <SwiperSlide key={item.id}>
              <div className="rcard d-flex flex-col w-24 px-8 py-12">
                <div className="rcard-txt-area px-8 w-full h-5">
                  <img
                    src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                    className="w-1"
                  />
                  <p className="text-md text-slate-700">{item.review}</p>
                </div>
                <div className="rcard-user-area d-flex items-center px-8 pb-2 gap-1">
                  <img
                    src="https://th.bing.com/th/id/OIP.ZEDl5Nz-Q8W9Twj_qAWfWwHaFj?pid=ImgDet&w=474&h=355&rs=1"
                    className="rcard-user w-3 rounded-full"
                  />
                  <h4> {item.user_name} </h4>
                </div>
                <div className="border-top"> </div>
                <div className="course-name d-flex justify-start gap-1 items-center">
                  <img src={item.thumb} alt="" className="w-4 rounded-lg" />
                  <p> {item.course_name} </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ReviewPage;
