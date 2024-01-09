import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CourseList.css";
import { FaInfoCircle } from "react-icons/fa";
import AutoBox from "../../../Components/AutocompleteBox/Autobox";
import { BsFilter } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  fetchCoursesByFiltersAsync,
  fetchCoursesByPaginationAsync,
  selectAllCourses,
} from "../courseSlice";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useState } from "react";
const ITEMS_PER_PAGE = 10;
const totalItems = 50;
const filters = [
  {
    id: "category",
    name: "Category",
    category: [
      { value: "Dev", label: "Development", checked: false },
      { value: "Design", label: "Design", checked: false },
      { value: "Language", label: "Language", checked: true },
      { value: "DSA", label: "DSA", checked: false },
      { value: "DataScience", label: "Data-Science", checked: false },
    ],
  },
  {
    id: "topic",
    name: "Topic",
    topic: [
      { value: "web", label: "Web Development", checked: false },
      { value: "devops", label: "DevOps", checked: false },
      { value: "docker", label: "Docker", checked: false },
      { value: "html", label: "HTML", checked: false },
      { value: "css", label: "CSS", checked: false },
      { value: "javascript", label: "Javascript", checked: false },
      { value: "python", label: "Python", checked: false },
    ],
  },
];

const section = filters[0];
const tSection = filters[1];

//console.log(filters[0].id)
export default function CourseList() {
  const dispatch = useDispatch();
  let course = useSelector(selectAllCourses);
  const [filter, setFilter] = useState({});
  const [page, setPage] = useState(1);
    
 // console.log(page);
 // console.log(ITEMS_PER_PAGE);

  //const courses = new Array (courses)

  const handleFilter = (section, option, e) => {
    const newFilter = { ...filter };

    if (e.target.checked) {
      newFilter[section.id] = option.value;
      //console.log([section.id]);
    } else {
      delete newFilter[section.id];
    }

    setFilter(newFilter);
    //console.log(newFilter)
    //console.log(section.id , option.value)
  };
  const handleTopics = (tSection, option, e) => {
    const newFilter = { ...filter };

    if (e.target.checked) {
      newFilter[tSection.id] = option.value;
     // console.log([tSection.id]);
    } else {
      delete newFilter[tSection.id];
    }
    setFilter(newFilter);
   // console.log(newFilter)
    //console.log(section.id , option.value)
  };

  const handlePage = (page) => {
    setPage(page);
    //console.log(section.id , option.value)
  };

  useEffect(() => {
    const pagination = { _page: page, _limit: ITEMS_PER_PAGE };
    dispatch(fetchCoursesByFiltersAsync(filter));
    dispatch(fetchCoursesByPaginationAsync(pagination));
  }, [dispatch,page,filter]);
  useEffect(() => {
    dispatch(fetchCoursesByFiltersAsync(filter));
  }, [dispatch,filter]);
  useEffect(() => {
    const pagination = { _page: page, _limit: ITEMS_PER_PAGE };
    dispatch(fetchCoursesByPaginationAsync(pagination));
  }, [dispatch,page]);
  
  return (
    <div>
      <div className="sec-cate mx-auto container-xl px-20">
        <div className="course-content d-flex flex-col">
          <div className="course-desc">
            <h4> All Courses</h4>
            <p className="w-60">
              Join more than 12 million learners and train up on JavaScript on
              Udemy. Choose from a wide range of top-rated JavaScript courses.
              From back-end development to app or website building, we’ve got
              you covered. Our real-world experts can lead you through hands-on
              projects to apply your skills.
            </p>
          </div>
          <div className="warinig">
            <div class="alert alert-info alert-white rounded">
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-hidden="true"
              >
                ×
              </button>
              <div class="icon text-center">
                <FaInfoCircle className="text-center w-2 mt-12 color-slate-50" />
              </div>
              <strong>Info!</strong> Not sure? All courses have a 30-day
              money-back guarantee
            </div>
          </div>
        </div>
        <div className="filter-sec">
          <div className="filer d-flex items-center justify-between">
            <div className="filter-sec-el d-flex items-center justify-between gap-2">
              <div className="filter-btn d-flex flex-col items-center border-grey-900 border-1-solid cur-point py-12 px-12">
                <span> Filter </span> <BsFilter />
              </div>
              <div className="sort-sec">
                <AutoBox />
              </div>
            </div>
            <div className="total-result text-bold text-grey-600">
              450 results
            </div>
          </div>
          <div className="d-flex gap-2 items-start mt-20 main-course">
            <div className="side-filter col-3">
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Categories</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <form className="fil-form">
                      {section.category &&
                        section.category.map((option, i) => {
                          return (
                            <>
                              <input
                                key={i}
                                type="checkbox"
                                id={section.id}
                                name={section.name}
                                defaultValue={option.value}
                                defaultChecked={option.checked}
                                onChange={(e) =>
                                  handleFilter(section, option, e)
                                }
                              />
                                 
                              <label htmlFor={option.label}>
                                {option.label}
                              </label>
                              <br />  
                            </>
                          );
                        })}
                    </form>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Topics</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <form>
                      {tSection.topic &&
                        tSection.topic.map((option, i) => {
                          return (
                            <>
                              <input
                                key={i}
                                type="checkbox"
                                id={tSection.id}
                                name={tSection.name}
                                defaultValue={option.value}
                                defaultChecked={option.checked}
                                onChange={(e) =>
                                  handleTopics(tSection, option, e)
                                }
                              />
                                 
                              <label htmlFor={option.label}>
                                {option.label}
                              </label>
                              <br />  
                            </>
                          );
                        })}
                    </form>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="content-sec col-9">
              {/* Link : https://stackoverflow.com/questions/69080597/%C3%97-typeerror-cannot-read-properties-of-undefined-reading-map */}
              {course &&
                course.map((item, index) => {
                  return (
                    <NavLink
                      to="/single"
                      className=" text-deco-none"
                      key={index}
                    >
                      <div className="card w-full d-flex gap-1 h-11-h pr-20 ">
                        <div className="thumb-area">
                          <img
                            src={item.img}
                            alt=""
                            className="w-18 ob-cover box-shadow-1"
                          />
                        </div>
                        <div className="text-area w-full d-flex gap-2 justify-between">
                          <div className="main-text">
                            <h5 className="mb-2 font-size-16 mt-4">
                              {item.title}
                            </h5>
                            <span className="text-xsm"> {item.mentor} </span>
                            <div className="rating d-flex items-center justify-start gap-0">
                              <span className="text-base pr-4 text-bold">
                                  
                                4.5  
                              </span>
                              <div class="rating py-4">
                                <span class="star checked"></span>
                                <span class="star checked"></span>
                                <span class="star checked"></span>
                                <span class="star "></span>
                                <span class="star"></span>
                              </div>
                              <div className="text-sm">
                                  
                                <span className="text-xsm text-bold">
                                    
                                  ({item.students})  
                                </span>  
                                Students  
                              </div>
                            </div>
                            <div className="d-flex justify-start gap-1">
                              <li> {item.hours} Hours </li>  
                              <li>| All Levels </li>
                              <li> | {item.lectures} lectures</li>
                            </div>
                            <button className="btn-0 btn-primary">
                              {item.award}
                            </button>
                          </div>

                          <div className="price text-lg text-center text-bold">
                            <div>
                              <span> &#2547; </span>  
                              {Math.round(
                                item.price * (1 - item.discountPercent / 100)
                              )}
                            </div>
                            <div className="line-through text-grey-500">
                              <span> &#2547; </span>
                              {item.price}
                            </div>
                          </div>
                        </div>
                        {/* <!-- Hover content --> */}
                        <div className="hover-content w-22 box-shadow-1 px-20 py-6 d-hidden">
                          <h4 className="px-0">{item.title}</h4>
                          <p> Upadated july 2023</p>
                          <p>
                            {item.desc}
                            <ul className="list-items">
                              <li className="text-slate-600 pb-4">
                                {item.list1}
                              </li>
                              <li className="text-slate-600 pb-4">
                                {item.list2}
                              </li>
                              <li className="text-slate-600">{item.list3}</li>
                            </ul>
                          </p>
                          <div className="d-flex gap-1 items-center">
                            <button className="btn btn-outline px-10 w-full font-size-18 btn-out-default">
                              Enroll
                            </button>
                            <div className="w-4 love rounded-full border-grey-600 text-center">
                              <FcLike className="text-center like-icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-1 border-b text-grey-200"> </div>
                    </NavLink>
                  );
                })}

              {/* Pagination start */}

              <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div className="hidden d-flex sm:flex flex-1 items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing  
                      <span className="font-medium ml-4 mr-2">
                        {(page - 1) * ITEMS_PER_PAGE + 1}
                      </span> 
                      to  
                      <span className="font-medium ml-2 mr-4">
                        {page * ITEMS_PER_PAGE}
                      </span>  
                      of
                      <span className="font-medium ml-4">{totalItems}</span> results
                    </p>
                  </div>
                  <div>
                    <table
                      className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                      aria-label="Pagination"
                    >
                      <tr>
                        <td className="border-1 rounded-sm">
                          <div
                            to=""
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                          >
                            <span className="sr-only">Previous</span>
                            <MdKeyboardArrowLeft
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </div>
                        </td>
                        {Array.from({
                          length: Math.ceil(totalItems / ITEMS_PER_PAGE),
                        }).map((el, index) => (
                          <td className="border-1 rounded-sm">
                            <div
                              onClick={e => handlePage(index + 1)}
                              aria-current="page"
                              className={`relative z-10 inline-flex items-center ${index+1 === page? 'bg-indigo-600 text-white': 'text-grey-400'} px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer`}
                            >
                              {index+1}
                            </div>
                          </td>
                        ))}

                        <td className="border-1 rounded-sm">
                          <div
                            to=" "
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                          >
                            <span className="sr-only">Next</span>
                            <MdKeyboardArrowRight
                              className="h-5 w-5 text-center"
                              aria-hidden="true"
                            />
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
