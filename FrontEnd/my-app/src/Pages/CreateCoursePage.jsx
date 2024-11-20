import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CreateCourse } from '../Redux/Slices/CoursesSlice';
import { useNavigate } from 'react-router-dom';

function CreateCoursePage() {

    const[title, setTitle]=useState()
    const[createdBy, setCreatedBy]=useState()
    const[category, setcategory]=useState()
    const[description,setDescription] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(title,createdBy,category,description)

    const sendData = async()=>{
        const Data = await dispatch(CreateCourse({title,description,createdBy,category}))

        if(Data?.payload?.success){
            navigate("/")
        }
    }



    return (

        <div className='h-[80vh] justify-center items-center flex  w-full'>

            <div className=' flex p-4 gap-3 px-44 border w-1/2 shadow-xl shadow-white rounded-lg' >

                {/* image of the course */}
                <div className='w-1/2 '>
                    <img className='rounded-md cursor-pointer' src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg" alt="CourseImage" />
                    <br />
                    <h1 className='text-xl'>Course Title</h1>

                    {/* <h1 className='text-xl border p-2 shadow-lg shadow-white rounded-md'>title</h1> */}

                    <input type="text" name="title" id="title" placeholder='Enter Course Title' className='border p-2 shadow-lg shadow-white rounded-md'
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}} />

                </div>

                <div className='w-1/2 flex flex-col'>
                   <h1 className='font-semibold text-xl '> Course Instructor </h1>

                   <input type="text" name="createdBy" id="createdBy" placeholder='Enter Course createdBy' className='border p-2 shadow-lg shadow-white rounded-md'
                    value={createdBy}
                    onChange={(e)=>{setCreatedBy(e.target.value)}} />

                    <br />
                    <h1 className='text-xl'>Course Category</h1>
                    
                    <input type="text" name="category" id="category" placeholder='Enter Course category' className='border p-2 shadow-lg shadow-white rounded-md'
                    value={category}
                    onChange={(e)=>{setcategory(e.target.value)}} />

                    <br />
                    <h1 className='text-xl'>Course Description</h1>

                    <input type="text" name="description" id="description" placeholder='Enter Course category' className='border p-2 shadow-lg shadow-white rounded-md'
                    value={description}
                    onChange={(e)=>{setDescription(e.target.value)}} />

                    <button className='border p-2 mt-2 rounded-md bg-yellow-300 text-black font-bold hover:bg-yellow-500 hover:text-white' onClick={sendData}>Create</button>

                </div>

            </div>
        </div>
    );
}

export default CreateCoursePage;
