import React, { useState } from 'react'
import toast from 'react-hot-toast'

function ReviewPage() {

    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setEmail] = useState("")
    const [review, setReview] = useState("")

    const handleContactInfo = ()=>{

        const EmailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@gmail\.com$/;

        if(!email.match(EmailValid)){
            toast.error("Please provide a valid email.");
            return;
        }

        setfirstName("");
        setlastName("");
        setEmail("");
        setReview("");
    }

    return (
        <div>
            <div className=" h-[80vh] flex flex-row items-center justify-center p-5 gap-4 sm:flex-col lg:flex-row">

                <div className="flex flex-col w-1/2 justify-center p-10 ">

                    <h1 className="text-2xl font-bold text-blue-600 cursor-pointer"> Contact US </h1>
                    Need to get in touch with us? Either Fill out the form with Your inquiry or find the department email you'd like to contact.

                </div>

                {/* Contact US Form  */}
                <div className="flex flex-col w-1/2 justify-center p-10 border rounded-xl shadow-2xl shadow-white ">


                    {/* first name and last name  */}
                    <div className=" flex sm:flex-col  lg:flex-row gap-3  items-center w-full ">

                        <span className="font-bold"> firstName: </span>
                        <input
                            type="text"
                            name="firstName "
                            id="firstName"
                            placeholder="Enter firstName"
                            className="rounded-md p-2 w-1/2"
                            value={firstName}
                            onChange={(e) => { setfirstName(e.target.value) }}
                        />
                        {/* <br /> */}
                        <span className="font-bold">lastName:</span>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Enter Your LastName"
                            value={lastName}
                            onChange={(e) => { setlastName(e.target.value) }}
                            className="rounded-md p-2 w-1/2"
                        />


                    </div>

                    <br />

                    {/* email  */}
                    <span className="font-bold">Email:</span>
                    <input
                        type="Email"
                        placeholder="Enter your Email"
                        className="rounded-md p-2"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />

                    <br />

                    {/* Review  */}
                    <span className="font-bold">What can we help you with:</span>
                    <textarea
                        type="textarea"
                        placeholder="Thank You for Your Query"
                        className="rounded-md p-2"
                        value={review}
                        onChange={(e) => { setReview(e.target.value) }}
                    />

                    <br />

                    {/* button */}
                    <div className='flex items-center justify-center w-auto'>
                        <button className='border bg-blue-600 rounded-md font-mono font-bold text-white hover:bg-blue-800 transition-all p-2 px-6' onClick={handleContactInfo}>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ReviewPage
