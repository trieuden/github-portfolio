// @flow strict

import { userData } from "@/data/user-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import ProjectCard from "../projects/project-card";

function HeroSection({ profile, projects }) {

    return (
        <section className="relative flex flex-col mt-16 items-start justify-between py-4 lg:py-12 w-full px-8">
            <h3 className="text-6xl font-bold">
                <span className="text-white">Turning Ideas into </span>
                <span className="text-green-500">Reality</span>
            </h3>
            <h3 className="mt-6 text-gray-400 text-left">Specializing in transforming ideas into exceptional products</h3>
            <div className="mt-12 flex flex-col items-start">
                <h3 className="text-6xl font-bold text-green-500">+5</h3>
                <h3 className="text-sm text-gray-400 mt-2">Projects Completed</h3>
            </div>
            <h3 className="mt-8 text-4xl font-bold text-white">Currently working on</h3>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                <ProjectCard key={projects[0].id} project={projects[0]} />
                <ProjectCard key={projects[1].id} project={projects[1]} />
                <ProjectCard key={projects[3].id} project={projects[3]} />
            </div>
            <h3 className="mt-12 space-y-4">
                <div className="text-2xl font-bold text-white">Daily Expense Management App</div>
                <div className="text-gray-400 leading-relaxed max-w-3xl">
                    Managing personal expenses is essential for everyone. It helps optimize finances not only for today but also for the future. Daily App is the perfect choice for tracking your daily expenses and income.
                </div>
            </h3>
        </section>
    );
}

export default HeroSection;
