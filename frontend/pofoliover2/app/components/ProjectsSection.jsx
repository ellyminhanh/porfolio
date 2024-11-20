"use client";

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectData = [
  {
    id: 1,
    title: "GLCMB Business Solution",
    image: "images/BS.jpg",
    tag: ["All", "ITBS"],
    description: ["Business Solution"],
  },
  {
    id: 2,
    title: "Yusen Warehousing",
    image: "images/WH_tally.jpg",
    tag: ["All", "warehouse"],
  },
  {
    id: 3,
    title: "Yusen Warehousing 2",
    image: "images/WH_tally.jpg",
    tag: ["All", "warehouse"],
  },
  {
    id: 4,
    title: "Yusen Warehousing 3",
    image: "images/WH_tally.jpg",
    tag: ["All", "warehouse"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My projects
      </h2>
      <div className="tex-white flex flex-row justify-center items-center text-white py-6 gap-2">
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("ITBS")}
          name="ITBS"
          isSelected={tag === "ITBS"}
        />
        <ProjectTag
          onClick={() => handleTagChange("warehouse")}
          name="Warehouse"
          isSelected={tag === "warehouse"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            imgUrl={project.image}
            description={project.description}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
