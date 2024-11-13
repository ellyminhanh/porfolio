'use client';

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-12 lg:grid-cols-12 gap-4">
            {/* Hello message */}
            <div className="col-span-1 sm:col-span-7 lg:col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
                        Hi, It's 
                    </span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            'Ellywithsunset',
                            1000,
                            'Business Solution',
                            3000,
                            'Warehousing',
                            3000,
                            'Tech Engineering',
                            3000
                        ]}
                        wrapper="span"
                        speed={40}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati expedita quo explicabo ab eveniet soluta sunt amet, at perferendis quidem, minus, tenetur nesciunt non beatae qui sint dolorem modi dolores?
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-bl from-indigo-400 via-orange-400 to-rose-400 hover:bg-slate-200 text-black">
                        Me
                    </button>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-bl from-indigo-400 via-orange-400 to-rose-400 hover:bg-slate-800 text-white">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                    </button>
                </div>
            </div>

            {/* Avatar */}
            <div className="col-span-1 sm:col-span-5 lg:col-span-5 place-self-center mt-4 mb-6 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative overflow-hidden">
                    <Image
                        src="/images/ava.jpg"
                        alt="profile pic"
                        className="object-cover w-full h-full"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;

