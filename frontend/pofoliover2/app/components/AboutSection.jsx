"use client"
import React, { startTransition } from "react";
import Image from "next/image";
import { useTransition } from "react";
import { useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA =[
    {
        title: "Skills",
        id:"skills",
        content: (
            <ul className="list-disc pl-2">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    },
    {
        title: "Education",
        id:"education",
        content: (
            <ul className="list-disc pl-2">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id:"experience",
        content: (
            <ul className="list-disc pl-2">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab,setTab] = useState("skills");
    const [isPending,startTransition] = useTransition();

    const handleTabChange =(id) => {
        startTransition(()=>{
            setTab(id);
        })
    }

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-10 sm:py-16 xl:px-16">
                <Image 
                    src="/images/room.jpg"
                    alt="room pic"
                    width={500}
                    height={500}
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
                    <p className="text-base lg:text-lg "> 
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam iure est quia? 
                        Voluptatibus et quia beatae necessitatibus quibusdam blanditiis soluta numquam. 
                        Cumque saepe cupiditate aliquam animi expedita odio temporibus neque.
                    </p>
                    <div className="flex flex-row justify-start mt-8 ">
                        <TabButton selectTab={()=> handleTabChange("skills")} active={tab==="skills"}>Skills </TabButton>
                        <TabButton selectTab={()=> handleTabChange("education")} active={tab==="education"}>Education </TabButton>
                        <TabButton selectTab={()=> handleTabChange("experience")} active={tab==="experience"}>Experience </TabButton>
                    </div>
                    {/*column for the list experience, skills, education*/}
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;