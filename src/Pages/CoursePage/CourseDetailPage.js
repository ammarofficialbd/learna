import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import CourseDetails from '../../features/Courses/Components/CourseDetails'
import Footer from '../../Components/Footer/Footer'

function CourseDetailPage() {
  return (
    <div>
        <Navbar> 
            <CourseDetails/>
            <Footer/>
        </Navbar>
    </div>
  )
}

export default CourseDetailPage