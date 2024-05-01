//material Tailwind
import { Carousel, Typography, Button } from "@material-tailwind/react";
import React from "react";

export function Testimonials() {
    return (
        <Carousel className="h-96" >
            <div className="relative h-full w-full">
                <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className=" text-center w-3/4 flex gap-14 ">
                        <div className=" rounded-full h-52"> 
                            <img className="rounded-full object-cover w-full h-full" src="src\assets\team\Swami Chidanand Ji.jpeg" />
                        </div>
                        <div className="text-white text-left">
                            <p className="text-xl font-bold mb-8">"The concept of BHARTIYA NADI PARISHAD is to accelerate the revival of rivers across the country with unprecedented coordination."</p>
                            <p className="text-lg font-bold	">HH Swami Chidanand Saraswati</p>        
                            <p className="text-lg font-bold	">President - Parmarth Niketan</p> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                        
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                    <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                        
                    </div>
                </div>
            </div>
        </Carousel>
    );
    }
