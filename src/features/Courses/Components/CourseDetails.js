import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./coursedetail.css";
import { RatingWithText } from "../../../Components/Scomponent/RatingWithText";
import { NavLink } from "react-router-dom";
import CourseContent from "./CousreContent";


export const image = [
  {
    id: 1,
    icon: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQKi4xu6dMpBNd99O7ABTPSFGRKOz5uMKydNvXJ9WxPlpmAR2fxoqtr9JL9NqMHPVfAvvRY1HlhoSnEq45y4V3lFLrbtyElrNKBtwawdQ6_yWqYpIJMZD-Jrb4tbTisA0ZPyoWelU1iFuskhKc5mW4Xl0y7f8c-UyAoguv09VHwCNUXmq0jOEQN_JGAyE/s512/windows.png ",
  },

  {
    id: 2,
    icon: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgZvU10d6XkUOa5v38CAVroQ9DZY6dn8dtsddp7e5hWU-5qP1CIXypylCY4FTcznYVjRr84vnBZwJEQRpGnJhHaTrzBQmv4Jy2ltUGTJFiUotNgtb35LwA_oLySMqdhVyd64lyBhmdEXV5gTY2gs0Gg3Xal2qVSqZCmKx6XRGhJK-Z33KaFY2xxn8O7mM/s512/github.png",
  },
  {
    id: 3,
    icon: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-mdNRr14UQdEo48xCP9vIw99D0BeIU2fSVz0WeU09-lrb4NLUk0f6ZlnEZCrOTA2BwgcS-dEPYB_jBrcFChw-3xcKucwpvBYPuR90crcaeW1FSVe-ZHftVqw8V6JtWyeiIofeCFqmjsk6swFaMbnFqU3_-9uSWEDExRRpP08KgsTBJ-6fU-xs4qi-eOU/s512/visual-studio.png",
  },
  {
    id: 4,
    icon: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6knciVBxqOEQapk5s0-SvsO8UMzkL7cfnniz2onK2JCDutYkmWpKxbB00FOLQ6PMnyFMSUAvCJtSB0EzAttIVC5NogpYGfYd4yNTDKR5XyFHIny8JEIa9CPKgli2PBjxCMb2EFundhN32x7Sh0oHUs5TDa6-pHc9gM95Wjstnw4eb4jwc1UNZjGt5rN8/s512/chrome.png",
  },
  {
    id: 5,
    icon: " https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXVWQVMNCWPntSqXjWnPjPfsz-I3D_VMxZP-knDf3FEEMlhRDcerJmL2l67bkSWgxlPznnGarfIO9qpWhbbfMfK1T4EEmWvqYqMW4CIRQAXK30yFdp2yTQLyCXjUEWVOSU196opzrF9POUFgcgm2sfIdNlp5etuw4Ra4SUFa9TEIWamsLEE_Vy1LwOyDA/s512/html-5.png",
  },
  {
    id: 6,
    icon: " https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4Xm4H5NOLgQuBQwA7tKQojg1oTGMsbf8IEDzVBoDpUwLd7uCp8o7HEkdAOAkXk0CYmwUfQfwYVBHkbqTBSgwpHsfn6iDe0VvNiZtimX42hsu3yWCa2Ulx65AFhC0cq7WnNiRl5If5_UYkD1KIY5iRqIhXzSO4DVz6HqaLGZPYcUT6M0Ep4T3qoQfQwbI/s512/css-3.png",
  },
  {
    id: 7,
    icon: " https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZaFj-4oNIOcjqbGxikvjH59jjLk7vlD8dy-03Nfqwyz1vUO1Q0k634k5qfDWraPzW0QhVIoRNnUPqyXC6eFclf203awWmghhjAnp_5Pjd8HaQDlBSpQJaDCWWlqV62eytSc96heEpH4rCr_W4E5fxu-y_vrlh9kiV5ijJJZke6vsTHZdYig7UFbCZxWE/s512/js.png",
  },
  {
    id: 8,
    icon: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbvDtyjUOcXfYGmwsuBHXAD0M6HotLHuEQpY-eTCY8MxeI5ImCM88NEh53Mu203TaaIpRgPaSyc12CQA7rnVUHFs9frDf1HhyZHczVUNoWIKNVGsnGbPq8c4ZCUzvNlqqQESIyy5TSRWqA-8zipkevrJoz8qhVb_gcNOIk8FtvJuMy6BzJ2TMle7GVfts/s512/science.png",
  },
  {
    id: 9,
    icon: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0zdsMYnUB-yyEUn6PWa8UBeDYyZ8Cfc6zaGz3RbEUZEC-GczQQ_k9Ya_ibGmgxfVtrJuovu3VsZxoj1hMr2Wc9Rsa7XDw4xmjaIRraSqZ-nAG10tImH2iiDJTMv-FSg2epqwvFuexWKUu1N5KepguSfYg7JfTsOaBxz2kQ5Odddy1VOvFR5tY1sPsejs/s512/node-js.png",
  },
];

function Example() {
  return (
    <video className="h-20 w-full rounded-lg px-4" controls>
      <source
        src="https://docs.material-tailwind.com/demo.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
}



function CourseDetails() {
  return (
    <div className="signle-page mx-auto container-xl ">
      <div className="d-flex flex-row bg-slate-700 items-center">
        <div className="basis-66">
          <div className="sec-course-details px-20 py-20">
            <div className="Course-path d-flex items-center">
              <p className="color-white"> Development </p> 
              <span>
                <MdKeyboardArrowRight /> 
              </span> 
              <p> Programming Language </p>
              <span>
                <MdKeyboardArrowRight /> 
              </span> 
              <p> Python </p> 
              <span>
                 
                <MdKeyboardArrowRight /> 
              </span>
            </div>
            <div className="course-title-desc">
              <h1 className="color-white ">
                100 Days of Code: The Complete Python Pro Bootcamp for 2023 
              </h1>
              <p className="color-white font-size-20 normal-text">
                Master Python by building 100 projects in 100 days. Learn data
                science, automation, build websites, games and apps!
              </p>
            </div>
            <div className="rating d-flex items-center gap-1">
              <button> Bestseller </button>
              <div className="rate">
                <RatingWithText />
              </div>
            </div>
            <div>
               
              Enrolled : 
              <span className="color-white text-sm"> 1205 students</span>
            </div>
            <div className="Author ">
              Created By
              <span> Ammar Junior </span>
            </div>
            <div className="others color-white">
              <span className="color-white"> Last Update : 12/2023 </span>
              <span className="color-white"> English </span>
            </div>
          </div>
        </div>
        <div className="basis-33">
          <Example />
          {/*  <video class="w-full h-16" controls>
            <source src={Intro} type="video/mp4"  poster={poster} />
          </video> */}
        </div>
      </div>
      <div className=" container-xl flex flex-row mt-20 px-20">
        <div className="Learning-sec basis-66">
          <div className="wh-learn border bg-slate-50 px-6 border-grey-100 py-6">
            <h3> What you'll learn </h3>
            <div className="text-sum flex-row flex text-field">
              <ul>
                <li>
                  Build 16 web development projects for your portfolio, ready to
                  apply for junior developer jobs.
                </li>
                <li>
                  After the course you will be able to build ANY website you
                  want.
                </li>
                <li>Work as a freelance web developer.</li>
                <li>Master backend development with Node</li>
              </ul>
              <ul>
                <li>
                  Learn the latest technologies, including Javascript, React,
                  Node and even Web3 development.
                </li>
                <li>
                  ABuild fully-fledged websites and web apps for your startup or
                  business.
                </li>
                <li>Master frontend development with React</li>
                <li>Learn professional developer best practices.</li>
              </ul>
            </div>
          </div>
          <div className="tools px-6 py-6 bg-slate-100 mt-20">
            <div>
              <h3> Course Requirements Tools </h3>
              <p>
                 
                This course was selected for our collection of top-rated courses
                trusted by businesses worldwide. Learn more
              </p>
              <div className="tool-icon flex gap-3 justify-center  pb-20">
                {image.map((item) => {
                  return (
                    <div className="icon flex w-3 h-3" key={item.id}>
                      <img
                        src={item.icon}
                        alt="icon"
                        className="text-slate-100"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="course-content">
            <div className="">
               <h3> Course content </h3>
              <div className="flex items-center justify-between">
                <p>
                   
                  <span>101 sections</span> . <span>636 lectures </span> .
                  <span> 57h 58m total length</span>
                </p>
                <NavLink> Learn More</NavLink>
              </div>
              <CourseContent/>
            </div>
          </div>
        </div>
        <div className="basis-33"></div>
      </div>
    </div>
  );
}

export default CourseDetails;
