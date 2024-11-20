import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function DescriptionPage() {
    const { state } = useLocation();

    useEffect(() => {
        console.log("Course Data in DescriptionPage:", state);
    }, [state]);

    return (

        <div className='h-[80vh] justify-center items-center flex  w-full'>

            <div className=' flex p-4 gap-3 px-44 border w-1/2 shadow-xl shadow-white rounded-lg' >

                {/* image of the course */}
                <div className='w-1/2 '>
                    <img className='rounded-md cursor-pointer' src={state.thumbnail?.secure_url} alt="CourseImage" />
                    <br />
                    <h1 className='text-xl'>Course Title</h1>

                    <h1 className='text-xl border p-2 shadow-lg shadow-white rounded-md'>{state.title}</h1>
                    <br />
                    <h1 className='text-xl'>Number of Leacture</h1>
                    <h1 className='text-xl border p-2 shadow-lg shadow-white rounded-md'>{state.numberOfLecture}</h1>

                    <button className='p-4 border w-full mt-3 rounded-md bg-yellow-600 text-white font-bold hover:bg-gray-600 transition-all  ease-out '>Subscribe</button>
                </div>

                <div className='w-1/2 flex flex-col'>
                   <h1 className='font-semibold text-xl '>Course Instructor</h1>
                   <h1 className='border p-2 shadow-lg shadow-white rounded-md'>
                    {state.createdBy}
                   </h1>

                    <br />
                    <h1 className='text-xl'>Course Category</h1>

                    <h1 className='text-xl border p-2 shadow-lg shadow-white rounded-md'>{state.category}</h1>

                    <br />
                    <h1 className='text-xl'>Course Description</h1>

                    <h1 className='text-sm border p-2 shadow-lg shadow-white rounded-md'>{state.description}</h1>



                </div>

            </div>
        </div>
    );
}

export default DescriptionPage;
