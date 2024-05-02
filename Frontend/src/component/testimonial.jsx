//material Tailwind
import { Carousel, Typography, Button } from "@material-tailwind/react";
import React from "react";

export function Testimonials() {
    return (
        <Carousel className="h-80" >
            <div className="relative h-full w-full">
                <img
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                    alt="image 1"
                    className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full bg-black/75 place-items-center">
                    <div className=" text-center flex w-[90vw] gap-14 px-8">
                        <div className="h-72 w-[25vw]">
                            <img className="rounded-full object-cover w-full h-full" src="src\assets\team\Swami Chidanand Ji.jpeg" />
                        </div>
                        <div className="text-white text-left my-auto">
                            <p className="text-xl font-bold mb-4">"The concept of BHARTIYA NADI PARISHAD is to accelerate the revival of rivers across the country with unprecedented coordination."</p>
                            <p className="font-bold	">HH Swami Chidanand Saraswati</p>
                            <p className="font-bold	">President - Parmarth Niketan</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                    alt="image 1"
                    className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full bg-black/75 place-items-center">
                    <div className=" text-center flex w-[90vw] gap-14 px-8">
                        <div className="h-72 w-[25vw]">
                            <img className="rounded-full object-cover w-full h-full" src="src\assets\team\Swami Chidanand Ji.jpeg" />
                        </div>
                        <div className="text-white text-left my-auto">
                            <p className="text-xl font-bold mb-4">"The concept of BHARTIYA NADI PARISHAD is to accelerate the revival of rivers across the country with unprecedented coordination."</p>
                            <p className="font-bold	">HH Swami Chidanand Saraswati</p>
                            <p className="font-bold	">President - Parmarth Niketan</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                    alt="image 1"
                    className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full bg-black/75 place-items-center">
                    <div className=" text-center flex w-[90vw] gap-14 px-8">
                        <div className="h-72 w-[25vw]">
                            <img className="rounded-full object-cover w-full h-full" src="src\assets\team\Swami Chidanand Ji.jpeg" />
                        </div>
                        <div className="text-white text-left my-auto">
                            <p className="text-xl font-bold mb-4">"The concept of BHARTIYA NADI PARISHAD is to accelerate the revival of rivers across the country with unprecedented coordination."</p>
                            <p className="font-bold	">HH Swami Chidanand Saraswati</p>
                            <p className="font-bold	">President - Parmarth Niketan</p>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    );
}
