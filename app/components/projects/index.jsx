import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import GlowCard from "../helper/glow-card";
import SectionTitle from "../helper/section-title";
import ProjectCard from "./project-card";
import GitHubCalendar from "react-github-calendar";

const Projects = ({ projects, profile }) => {
    console.log("Projects:", projects);
    return (
        <div id="projects" className="relative z-1 pt-12 border-t my-12 px-8 lg:my-24 border-[#25213b]">
            <h3 className="text-6xl font-bold">
                <span className="text-green-500">Recent Projects </span>
            </h3>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-1 gap-6">
                <div className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 border border-gray-700">
                    <div className="flex justify-between items-center">
                        <h4 className="text-2xl font-bold text-white">Sports Field Booking System</h4>
                        <a href="https://github.com/LeDuyNhan1201/sports-field-booking-client.git" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                />
                            </svg>
                        </a>
                    </div>
                    <p className="mt-4 text-gray-400 leading-relaxed">
                        A comprehensive web application for managing and booking sports facilities. Features include real-time availability checking, online booking system, and user management.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <span className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full">React.js</span>
                        <span className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full">Node.js</span>
                        <span className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full">MongoDB</span>
                        <span className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full">Express</span>
                        <span className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full">REST API</span>
                    </div>
                </div>

                <div className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 border border-gray-700">
                    <div className="flex justify-between items-center">
                        <h4 className="text-2xl font-bold text-white">Glasses Shopping Website</h4>
                        <a href="https://github.com/ThangVo0308/glasses-shopping-web.git" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                />
                            </svg>
                        </a>
                    </div>
                    <p className="mt-4 text-gray-400 leading-relaxed">
                        An e-commerce platform for eyewear products. Features include product browsing, shopping cart functionality, user authentication, and secure checkout process.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <span className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full">React.js</span>
                        <span className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full">Redux</span>
                        <span className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full">Node.js</span>
                        <span className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full">MongoDB</span>
                        <span className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full">Tailwind CSS</span>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center py-12">
                <GitHubCalendar username="said7388" blockSize={14} />
            </div>
        </div>
    );
};

export default Projects;
