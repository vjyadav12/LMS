import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card22({ course }) {
    const navigate = useNavigate()
    return (

        <div className='border shadow-xl shadow-white p-5 w-[22rem] h-[430px] cursor-pointer overflow-hidden rounded-md' 
        onClick={()=>navigate("/course/description",{ state: course })}>

            <div className=' border overflow-hidden '>
                <img src={course?.thumbnail?.secure_url} alt="" className='h-48 w-full rounded-lg group-hover:scale-[1,2] transition-all' />
            </div>

            <br />
            <div className='p-3 space-y-1'>
                <h1>Title:  {course.title}</h1>
                <h1>Category: {course?.category}</h1>
                <h1>Total Leactures: {course?.numberOfLecture}</h1>
                <h1>Instructor: {course?.createdBy}</h1>
            </div>

        </div>

    )
}

export default Card22
