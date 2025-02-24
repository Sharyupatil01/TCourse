import React from 'react'

const Filter = (props) => {
    let filterData = props.filterData;
    let category=props.category;
    let setcategory=props.setcategory;
    function choosecategory(title)
    {
      //set cateogry 
      setcategory(title);

    }




  return (
    <div className='flex flex-wrap max-w-max w-11/12 space-x-4 gap-y-4 mx-auto py-4 justify-center' >
      {
        filterData.map( (data) => (
            <button onClick={()=>choosecategory(data.title)} className='bg-pink-300 border-2 shadow-sm shadow-slate-100 border-y-emerald-100 rounded-md py-2 px-12 cursor-pointer font-mono font-medium hover:bg-pink-200 ' key={data.id}>{data.title}</button>
        ))
      }
    </div>
  )
}

export default Filter
  