
import React from 'react';
import Card from "./Card";
import { useState } from 'react';


const Cards = (props) => {
  let courses = props.courses;
  // console.log(courses);
  let category = props.category;
  const [likedcourse, setlikedcourse] = useState([]);



  function getcourse() {
    if (category === "All") {
      let allcourses = [];
      Object.values(courses).forEach(array => {
        array.forEach(courseData => {
          allcourses.push(courseData);
        })
      })
      return allcourses;
    }
    else {
      return courses[category];
    }

  }

  // }
  // function getcourse() {
  //   return Object.values(courses).flat(Infinity);
  // }




  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getcourse().map((course) => (
          <Card key={course.id} course={course}
            likedcourse={likedcourse}
            setlikedcourse={setlikedcourse} />
        ))
      }

    </div>
  )
}

export default Cards

// import React from 'react';
// import Card from './Card';

// const Cards = ({ courses }) => {
//   // Function to flatten the courses object into an array
//   const getCourses = () => {
//     let allCourses = [];
//     Object.values(courses).forEach((array) => {
//       array.forEach((courseData) => {
//         allCourses.push(courseData);
//       });
//     });
//     return allCourses;
//   };

//   return (
//     <div>
//       {getCourses().map((course) => (
//         <Card key={course.id} course={course} />
//       ))}
//     </div>
//   );
// };

// export default Cards;
