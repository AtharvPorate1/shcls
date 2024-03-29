"use client"
import React, { useState } from "react";
import Appointment from "@/components/Appointment";
import BookAppt from "@/components/BookAppt";
import BookSuccessMsg from "@/components/BookSuccessMsg";
import Navbar from "@/components/Navbar";

const Apt = () => {
    // const [IsBooked, SetIsBooked]=useState(false)
    const [IsBooked, SetIsBooked]=useState(false);
    const Booked=()=>{
        SetIsBooked(true);
    }
    return (

        <div className=" bg-[#55a05a] h-[100vh]">
            <Navbar/>
            <div className="bg-[#ffffff] h-[80vh] rounded-3xl m-5 p-8 px-8">
                <h1 className=" font-WorkSans text-3xl font-medium">Book your appointment</h1>
                <div className="flex justify-between">
                    <div className="flex w-[50%]">
                    <BookAppt/>
                    </div>    
                    <div className="flex justify-center border-2 border-[#55a05a] mt-0 mx-20 rounded-xl pt-4 w-[25%]">
                    {IsBooked === false ? <Appointment /> : <BookSuccessMsg/>}   
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Apt;