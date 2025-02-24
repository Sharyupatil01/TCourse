import React from 'react';

import { toast } from 'react-toastify';
import { FcLike } from "react-icons/fc";
// import { ToastContainer } from 'react-toastify';
import { FcLikePlaceholder } from "react-icons/fc";

const Card = (props) => {

    let course = props.course;
    let likedcourse = props.likedcourse;
    let setlikedcourse = props.setlikedcourse;

    function clickhandler() 
    {
        if (likedcourse.includes(course.id)) 
            {
            //pehle se liked hai 
            setlikedcourse((prev) => 
                prev.filter((cid)=>(cid !== course.id))
            );
         
            toast.error('liked removed', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                
                });
            //liked course se wo course hata do 
        }
        else
        {
            //pehle se jo course are not liked to that courses 
            //set it as liked 

            if(likedcourse.length===0)
            {
                setlikedcourse([course.id]);
            }
           else
           {
            setlikedcourse((prev) => 
                [...prev,course.id]);
            }
            toast.success('liked', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                
                });
       }
    }

    return (
        <div className="w-[300px] bg-slate-500 bg-opacity-60 rounded-md overflow-hidden  shadow-zinc-300  shadow-sm transform transition-transform duration-300 hover:scale-105">


            <div className='relative'>
                <img src={course.image.url} alt="course" />


                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
                    <button onClick={clickhandler}>
                        {
                            likedcourse.includes(course.id)?(<FcLike fontSize="1.75rem" backgrounColor="black" />):(<FcLikePlaceholder fontSize="1.75rem" />)
                        }
                    </button>
                </div>
            </div>


            <div className='p-4'>
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className='mt-2 text-white'>{course.description}</p>
            </div>





        </div>
    )
}
export default Card
