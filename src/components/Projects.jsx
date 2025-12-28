import React from "react";
import { FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import ProjectCard from "./ProjectCard";


const Projects = () => {
    const projects = [
        {
            title: "ShopOrbits",
            category: "E-Commerce",
            description:
                "A cinematic e-commerce experience with glassmorphism UI, responsive design, and smooth GSAP animations.",
            link: "https://github.com/pathaksanchit25-coder/shoporbits",
            status: "In Progress",
        },
        {
            title: "SongOrbit",
            category: "Music App",
            description:
                "A sleek music streaming app with immersive UI, playlist management, and smooth audio playback.",
            link: "https://github.com/pathaksanchit25-coder/songorbit",
            status: "In Progress",
        },
        {
            title: "TasteOrbit",
            category: "Food Discovery",
            description:
                "Discover recipes and restaurants with cinematic UI, responsive layouts, and interactive search.",
            link: "https://github.com/pathaksanchit25-coder/tasteorbit",
            status: "In Progress",
        },
        {
            title: "WorkOrbit",
            category: "Productivity",
            description:
                "A productivity suite with task management, collaboration tools, and premium cinematic design.",
            link: "https://github.com/pathaksanchit25-coder/workorbit",
            status: "Completed",
        },
    ];

    return (
        <div className="main-project-cont bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] p-6">
            <div className="title-card px-10">
                <div className="title mb-12 text-center">
                    <h1 className="text-indigo-400 text-4xl font-extrabold">My Projects</h1>
                </div>

                {/* Projects Grid */}
                <div className="flex flex-wrap justify-center gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;