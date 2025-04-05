import { userData } from "@/data/user-data";
import Contributions from "./components/contributions";
import HeroSection from "./components/hero-section";
import GitLanguage from "./components/language";
import Projects from "./components/projects";
import GitStats from "./components/stats";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";


async function getGitProfile() {
    const res = await fetch(`https://api.github.com/users/${userData.githubUser}`);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return await res.json();
}

async function getGitProjects() {
    const res = await fetch(`https://api.github.com/search/repositories?q=user:${userData.githubUser}+fork:false&sort=stars&per_page=100&type=Repositories`);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return await res.json();
}

export default async function Home() {
    const profile = await getGitProfile();
    const projects = await getGitProjects();
    
    return (
        <div className="flex">
            {/* Fixed left image */}
            <div className="fixed h-screen mt-16 ml-16 w-[500px]">
                <div className="w-3/4 mr-24 p-12 rounded-xl flex flex-col bg-gray-600 items-center">
                    <Image 
                        src={profile.avatar_url} 
                        alt="Profile" 
                        width={500}
                        height={500}
                        className="rounded-xl h-full w-full object-cover" 
                    />
                    <h3 className="text-3xl font-bold mt-12">Huỳnh Ngọc Triều</h3>
                    <h3 className="text-lg text-center text-gray-400 mt-2">Frontend & Mobile Development Intern</h3>
                    <div className="flex gap-4 mt-4">
                        <a href="https://www.facebook.com/trieudennn" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-green-500 hover:bg-green-500 hover:text-white transition-all">
                            <FaFacebookF className="w-6 h-6" />
                        </a>
                        <a href="https://github.com/trieuden" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-green-500 hover:bg-green-500 hover:text-white transition-all">
                            <FaGithub className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/trieuden/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-green-500 hover:bg-green-500 hover:text-white transition-all">
                            <FaLinkedinIn className="w-6 h-6" />
                        </a>
                        <a href="mailto:yantic088@gmail.com" className="p-2 rounded-lg text-green-500 hover:bg-green-500 hover:text-white transition-all">
                            <HiOutlineMail className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Scrollable content area */}
            <div className="ml-[500px] flex-1 overflow-y-auto">
                <HeroSection profile={profile} projects={projects.items}/>
                <GitStats />
                <Projects projects={projects.items} profile={profile} />
                <Contributions />
            </div>
        </div>
    );
}

export async function generateMetadata({ params, searchParams }, parent) {
    const profile = await getGitProfile();

    return {
        title: `Trieuden`,
        description: profile.description,
        icons: [{
            rel: 'icon',
            url: '/favicon.ico',
        }],
    };
}
