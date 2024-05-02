import React from 'react'

export default function Founder() {
    return (
        <div className="relative h-full w-full">
                    <img
                        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                        alt="image 1"
                        className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full bg-black/75 place-items-center">
                        <div className=" text-center flex w-[90vw] gap-14 px-8">
                            <div className="h-72 w-[25vw]">
                                <img className="rounded-full object-cover w-full h-full" src="src\assets\team\Raman Kant 1.jpg" />
                            </div>
                            <div className="text-white text-left my-auto">
                                <p className="text-xl font-bold mb-4">"Formation of BHARTIYA NADI PARISHAD is an important step taken after deep brainstorming with the cooperation of society and system for the prosperity of India's rivers. 
                                The aim of BNP is to achieve the sustainable development goals related to rivers, 
                                water and environment of the United Nations with the cooperation of the society and the government, 
                                and under the Water Vision 2047 of the Hon'ble Prime Minister Shri Narendra Modi, 
                                the rivers of the country till the completion of 100 years of India's independence. To make it pure and uninterrupted."
                                </p>
                                <p className="font-bold	">Raman Kant</p>
                                <p className="font-bold	">Riverman of India</p>
                                <p className="font-bold	">Founder - Bharatiya Nadi Parishad</p>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
