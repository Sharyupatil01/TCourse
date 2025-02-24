import React, { useState, useEffect } from "react";
import Nav from "./components/Nav"
import Cards from "./components/Cards"
import Filter from "./components/Filter"
import { apiUrl, filterData } from "./data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/Spinner";





const App = () => {

  const [courses, setCourses] = useState({});
  const [loading, setloading] = useState(true);
  const[category,setcategory]=useState(filterData[0].title);


  async function fetchData() {
    setloading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      //  console.log(output);
      // console.log(output.data);
      setCourses(output.data);
    }
    catch (error) {
      toast.error("Network mai koi dikaat hai !!", {
        position: "top-right",
        autoClose: 5000, // Duration in milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      
    }
    setloading(false);
  }
  useEffect(() => {
    fetchData();
  }, [])






  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      
      <div >
        <Nav>

        </Nav>
      </div>
      <div className="bg-slate-900">
        <Filter filterData={filterData}
        category={category}
        setcategory={setcategory}>

        </Filter>
      </div>

      <div className="w-12/12 max-w-[2000px] flex justify-center items-center  bg-slate-900">
    
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
        }
      </div>


    </div>
  );
};

export default App;
