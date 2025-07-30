"use client";
import { useEffect, useState } from "react";
import { Box, Stack, useTheme, useMediaQuery } from "@mui/material";
import { Facebook, GitHub, LinkedIn, Email } from "@mui/icons-material";
import { Preahvihear } from "next/font/google";
import "@/core/styles/background.css";
import "@/core/styles/animations.css";

import { useThemeMode } from "@/portfolio/providers";

const preahvihear = Preahvihear({
    subsets: ["latin"],
    weight: "400",
});
type GithubProfile = {
     avatar_url: string;
     name: string;
};

export const HomePage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { isDarkMode } = useThemeMode();
    const [gitProfile, setGitProfile] = useState<GithubProfile>();
    const [gitProjects, setGitProjects] = useState([]);

    const userData = {
        githubUser: "trieuden",
        devUsername: "Huynh Ngoc Trieu",
        github: "https://github.com/trieuden",
        facebook: "https://www.facebook.com/trieudennn/",
        linkedIn: "https://www.linkedin.com/",
        twitter: "https://twitter.com/",
        stackOverflow: "https://stackoverflow.com/",
        leetcode: "https://leetcode.com/",
        skills: ["ReactJs", "NextJs", "React Native", "NodeJS", "Java", "HTML", "Css", "Php", "Material UI", "TailwindCss", "MySql", "Docker", "JavaScript", "Github", "GitLab", "PostgreSQL"],
        skillIcon: [
            `https://icons.iconarchive.com/icons/pictogrammers/material/128/react-icon.png`,
            `https://icons.iconarchive.com/icons/arturo-wibawa/akar/128/nextjs-icon.png`,
            `https://icons.iconarchive.com/icons/pictogrammers/material/128/react-icon.png`,
            `https://icons.iconarchive.com/icons/ionic/ionicons/128/logo-nodejs-icon.png`,
            `https://icons.iconarchive.com/icons/tatice/cristal-intense/128/Java-icon.png`,
            `https://icons.iconarchive.com/icons/arturo-wibawa/akar/128/html-icon.png`,
            `https://icons.iconarchive.com/icons/icons8/ios7/128/Files-Css-Filetype-icon.png`,
            `https://icons.iconarchive.com/icons/arturo-wibawa/akar/128/php-icon.png`,
            `https://icons.iconarchive.com/icons/pictogrammers/material/128/material-ui-icon.png`,
            `https://icons.iconarchive.com/icons/pictogrammers/material/128/tailwind-icon.png`,
            `https://icons.iconarchive.com/icons/simpleicons-team/simple/128/mysql-icon.png`,
            `https://icons.iconarchive.com/icons/pictogrammers/material/128/docker-icon.png`,
            `https://icons.iconarchive.com/icons/arturo-wibawa/akar/128/javascript-icon.png`,
            `https://icons.iconarchive.com/icons/pictogrammers/material/128/github-icon.png`,
            `https://icons.iconarchive.com/icons/pictogrammers/material/128/gitlab-icon.png`,
            `https://icons.iconarchive.com/icons/aniket-suvarna/box-logo/128/bxl-postgresql-icon.png`,
        ],
        timezone: "+7",
    };
    const englishProjects = [
        { skill: "NextJs", icon: "https://icons.iconarchive.com/icons/arturo-wibawa/akar/128/nextjs-icon.png" },
        { skill: "Groq AI", icon: "https://icons.iconarchive.com/icons/rafiqul-hassan/blogger/128/Chat-icon.png" },
        { skill: "Free Dictionary API", icon: "https://icons.iconarchive.com/icons/osullivanluke/orb-os-x/128/Dictionary-icon.png" },
        { skill: "TailwindCss", icon: "https://icons.iconarchive.com/icons/pictogrammers/material/128/tailwind-icon.png" },
        { skill: "Material UI", icon: "https://icons.iconarchive.com/icons/pictogrammers/material/128/material-ui-icon.png" },
    ];
    const personalProjects = [
        { skill: "React Native", icon: "https://icons.iconarchive.com/icons/pictogrammers/material/128/react-icon.png" },
        { skill: "NodeJs", icon: "https://icons.iconarchive.com/icons/ionic/ionicons/128/logo-nodejs-icon.png" },
        { skill: "MySql", icon: "https://icons.iconarchive.com/icons/simpleicons-team/simple/128/mysql-icon.png" },
        { skill: "Css", icon: "https://icons.iconarchive.com/icons/icons8/ios7/128/Files-Css-Filetype-icon.png" },
    ];
    const sportsProjects = [
        { skill: "Html", icon: "https://icons.iconarchive.com/icons/arturo-wibawa/akar/128/html-icon.png" },
        { skill: "Css", icon: "https://icons.iconarchive.com/icons/icons8/ios7/128/Files-Css-Filetype-icon.png" },
        { skill: "JavaScript", icon: "https://icons.iconarchive.com/icons/arturo-wibawa/akar/128/javascript-icon.png" },
        { skill: "mySql", icon: "https://icons.iconarchive.com/icons/simpleicons-team/simple/128/mysql-icon.png" },
    ];

    useEffect(() => {
        const fetchData = async () => {
            const profile = await fetch(`https://api.github.com/users/${userData.githubUser}`);
            const profileData = await profile.json();
            setGitProfile(profileData);

            const project = await fetch(`https://api.github.com/search/repositories?q=user:${userData.githubUser}+fork:false&sort=stars&per_page=100&type=Repositories`);
            const projectData = await project.json();
            setGitProjects(projectData.items || []);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const createFloatingDots = () => {
            const container = document.querySelector(".animated-background");
            // Tạo 20 chấm tròn
            for (let i = 0; i < 40; i++) {
                const dot = document.createElement("div");
                dot.className = "floating-dot";
                // Random vị trí
                dot.style.left = `${Math.random() * 100}%`;
                // Random kích thước
                const size = Math.random() * (20 - 5) + 5;
                dot.style.width = `${size}px`;
                dot.style.height = `${size}px`;
                // Random độ trễ animation
                dot.style.animationDelay = `${Math.random() * 15}s`;
                // Random tốc độ animation
                dot.style.animationDuration = `${Math.random() * (20 - 10) + 10}s`;
                container?.appendChild(dot);
            }
        };

        if (gitProfile) {
            createFloatingDots();
        }

        // Cleanup function
        return () => {
            const container = document.querySelector(".animated-background");
            const dots = container?.querySelectorAll(".floating-dot");
            dots?.forEach((dot) => dot.remove());
        };
    }, [gitProfile]);

    return (
        <Box
            className={`animated-background shadow-2xl overflow-y-auto ${isMobile ? "": "px-6"} text-white bg-[${theme.palette.background.default}]`}
            sx={{
                scrollBehavior: "smooth",
                "&::-webkit-scrollbar": {
                    width: "4px",
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor: isDarkMode ? "#333" : "#f1f1f1",
                    borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: isDarkMode ? "#f1f1f1" : "#b3b3b3",
                    borderRadius: "10px",
                },
            }}
        >
            {gitProfile && (
                <Stack direction={isMobile ? "column" : "row"} className="justify-between items-start p-2 pt-[65px]" spacing={2}>
                    <Stack
                        flex={1}
                        className={`p-8 rounded-3xl h-full`}
                        sx={{
                            borderColor: theme.palette.background.paper,
                            transition: "all 0.3s ease-in-out",
                            boxShadow: "0 4px 20px rgba(117, 26, 255, 0.5)",
                            border: "1px solid #751aff",
                            animation: "slideDown 0.8s ease-out forwards",
                        }}
                        boxShadow={3}
                    >
                        <Stack className="items-start p-4 rounded-3xl" spacing={2}>
                            <Box component={"img"} className="text-3xl font-bold mt-12 rounded-md" src={gitProfile?.avatar_url} />
                            <Stack direction="column" spacing={0.1} alignItems="start">
                                <span style={{ color: theme.palette.text.secondary }}>Hi I am</span>
                                <h3 className="text-3xl font-bold mt-12 text-green-500">{gitProfile?.name}</h3>
                            </Stack>
                            <h3 className={`text-xl text-center text-gray-400 ${preahvihear.className}`}>Front-end Developer</h3>{" "}
                            <Stack direction={"row"} spacing={1} className="flex-wrap w-full justify-center">
                                <a
                                    href="https://www.facebook.com/trieudennn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 items-center justify-center flex rounded-full border-1 hover:bg-green-500 hover:text-white transition-all"
                                >
                                    <Facebook className="rounded-full" />
                                </a>
                                <a
                                    href="https://github.com/trieuden"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 items-center justify-center  border-1 flex rounded-full hover:bg-green-500 hover:text-white transition-all"
                                >
                                    <GitHub />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/trieuden/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 items-center justify-center  border-1 flex rounded-full hover:bg-green-500 hover:text-white transition-all"
                                >
                                    <LinkedIn />
                                </a>
                                <a href="mailto:yantic088@gmail.com" className="w-10 h-10 items-center justify-center flex  border-1 rounded-full  hover:bg-green-500 hover:text-white transition-all">
                                    <Email />
                                </a>
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack spacing={10} flex={3} className={`p-4 rounded-3xl min-h-full items-start ${isMobile ? "": "px-20"}`} sx={{ borderColor: theme.palette.background.paper }} boxShadow={3}>
                        <Stack spacing={2}>
                            <span className={`${preahvihear.className} text-5xl text-green-500 font-bold`}>I'm Front-end Developer</span>
                            <span className={`${isMobile ? "w-auto" : "w-[600px]"}`}>
                                A developer graduated in Information Technology from Saigon University. With passion, practical experience, and self-study in front-end development, I will bring you
                                what you need.
                            </span>
                        </Stack>
                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{ animation: "slideDown 0.8s ease-out forwards" }}
                            className={`self-center justify-between items-center ${isMobile ? "": " p-4"} hover:shadow-md transition-shadow`}
                        >
                            <Stack spacing={1} sx={{ boxShadow: "0 4px 20px rgba(117, 26, 255, 0.5)", border: "1px solid #751aff" }} className="items-center px-6 py-4 w-[180px] rounded-md">
                                <span className="text-green-500 font-semibold text-3xl">{"<"} 1 year</span>
                                <span className="text-xl font-semibold">Experience</span>
                            </Stack>

                            <Stack spacing={1} sx={{ boxShadow: "0 4px 20px rgba(117, 26, 255, 0.5)", border: "1px solid #751aff" }} className="items-center px-6 py-4 w-[180px]  rounded-md">
                                <span className="text-green-500 font-semibold text-3xl">+{gitProjects.length}</span>
                                <span className=" text-xl  font-semibold">Projects</span>
                            </Stack>
                        </Stack>

                        <Stack spacing={2} className="w-full" sx={{ animation: "slideDown 0.8s ease-out forwards" }}>
                            <h3 className={`${preahvihear.className} text-3xl`}>Skills</h3>
                            <Stack direction={"row"} flexWrap="wrap" className="w-full gap-3">
                                {userData.skills.map((skill, index) => (
                                    <Stack
                                        direction={"row"}
                                        alignItems={"center"}
                                        key={index}
                                        className="px-4 cursor-pointer py-2 bg-gray-800 rounded-full text-sm font-semibold text-gray-300 hover:bg-green-500 hover:text-white transition-colors"
                                        style={{
                                            animation: `skillAppear 10s ease-out ${index * 0.2}s infinite`,
                                            animationFillMode: "backwards",
                                        }}
                                        spacing={1}
                                    >
                                        <img src={userData.skillIcon[index]} alt="" className="w-6 h-6" />
                                        <span>{skill}</span>
                                    </Stack>
                                ))}
                            </Stack>
                        </Stack>
                        <Stack spacing={2} className="w-full" sx={{ animation: "slideDown 0.8s ease-out forwards" }}>
                            <h3 className={`${preahvihear.className} text-3xl`}>Work Experience</h3>
                            <Stack spacing={2} direction={isMobile ? "column": "row"}>
                                <Stack flex={1} direction={'row'} alignItems="center" spacing={4} className="p-4 rounded-md" sx={{ border: "1px solid #751aff" }}>
                                    <img
                                        src="https://vnagroup.com.vn/wp-content/uploads/elementor/thumbs/Logo-VNA-1-p4vwbdksrgq48cbgq628vxr1d7csaiv7qwu3rocj5s.png"
                                        title="Logo VNA 1"
                                        alt="Logo VNA 1"
                                        loading="lazy"
                                    ></img>
                                    <Stack spacing={1}>
                                        <span className="text-2xl">
                                            VNA Group <span className="text-xs text-gray-400">5/2025 - 7/2025</span>
                                        </span>
                                        <span style={{ color: theme.palette.text.secondary }} className="text-md">
                                            VNA Corporation is a software company in Ho Chi Minh City. I had the opportunity to learn and work as an intern here. I develop software, using NextJs to
                                            build front-end features for the website.{" "}
                                        </span>
                                        <span>Role: Front-end Developer Intern</span>
                                    </Stack>
                                </Stack>
                                <Stack flex={1}></Stack>
                            </Stack>
                        </Stack>
                        <Stack spacing={2} className="w-full" sx={{ animation: "slideDown 0.8s ease-out forwards" }}>
                            <h3 className={`${preahvihear.className} text-3xl`}>My Projects</h3>
                            <Stack spacing={8}>
                                <Stack sx={{ animation: "slideDown 0.8s ease-out forwards" }}>
                                    <Stack direction={"row"} alignItems="center" spacing={2} className="p-4 rounded-md hover:bg-gray-800 transition-colors cursor-pointer">
                                        <Stack className="w-[70%] z-1">
                                            <i className={` text-md text-gray-500`}>7/2025 - present</i>
                                            <span className={`${preahvihear.className} text-green-500 text-3xl mb-4`}>English Vocabulary Learning Website</span>
                                            <span className="bg-[#3a435059] p-2 rounded-md">
                                                Website supports learning English vocabulary, built with NextJs and deployed on Vercel. The website includes basic functions to assist in vocabulary
                                                learning and integrates AI to generate questions related to vocabulary, create paragraphs, and score. It has an interface for both computers and mobile
                                                devices.
                                            </span>
                                            <Stack direction={"row"} flexWrap="wrap" alignItems="center" className="gap-2 mt-4">
                                                {englishProjects.map((project, index) => (
                                                    <Stack
                                                        key={index}
                                                        direction={"row"}
                                                        alignItems={"center"}
                                                        className="px-4 cursor-pointer py-2 rounded-full text-sm font-semibold text-gray-300 bg-green-500 transition-colors"
                                                        spacing={1}
                                                    >
                                                        <img src={project.icon} alt="" className="w-6 h-6" />
                                                        <span>{project.skill}</span>
                                                    </Stack>
                                                ))}
                                            </Stack>
                                            <a target="_blank" href="https://vocab-trainer-alpha.vercel.app/" className="text-gray-400 mt-2">
                                                https://vocab-trainer-alpha.vercel.app/
                                            </a>
                                        </Stack>
                                        <img src={"/images/vocab.PNG"} className="w-[60%] absolute right-1 z-0 opacity-50" />
                                    </Stack>
                                </Stack>
                                <Stack sx={{ animation: "slideDown 0.8s ease-out forwards" }}>
                                    <Stack direction={"row"} alignItems="center" spacing={2} className="p-4 justify-end rounded-md hover:bg-gray-800 transition-colors cursor-pointer">
                                        <Stack className="w-[70%] z-1 text-end">
                                            <i className={` text-md text-gray-500`}>1/2024- 12/2024</i>
                                            <span className={`${preahvihear.className} text-green-500 text-3xl mb-4`}> Personal Management App</span>
                                            <span className="bg-[#3a435059] p-2 rounded-md">
                                                An application for managing daily expenses that includes functions for tracking both daily, monthly income and spend. It is built using two main
                                                languages React Native and NodeJs.
                                            </span>
                                            <Stack direction={"row"} flexWrap="wrap" alignItems="end" justifyContent={"end"} className="gap-2 mt-4">
                                                {personalProjects.map((value, index) => (
                                                    <Stack
                                                        key={index}
                                                        direction={"row"}
                                                        alignItems={"center"}
                                                        className="px-4 cursor-pointer py-2 rounded-full text-sm font-semibold text-gray-300 bg-green-500 transition-colors"
                                                        spacing={1}
                                                    >
                                                        <img src={value.icon} alt="" className="w-6 h-6" />
                                                        <span>{value.skill}</span>
                                                    </Stack>
                                                ))}
                                            </Stack>
                                            <a target="_blank" href="https://github.com/trieuden/daily-app-client.git" className="text-gray-400 mt-2">
                                                https://github.com/trieuden/daily-app-client.git
                                            </a>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Stack sx={{ animation: "slideDown 0.8s ease-out forwards" }}>
                                    <Stack direction={"row"} alignItems="center" spacing={2} className="p-4 rounded-md hover:bg-gray-800 transition-colors cursor-pointer">
                                        <Stack className="w-[70%] z-1">
                                            <i className={` text-md text-gray-500`}>7/2025 - present</i>
                                            <span className={`${preahvihear.className} text-green-500 text-3xl mb-4`}>Sports Field Manager Website</span>
                                            <span className="bg-[#3a435059] p-2 rounded-md">
                                                Sports eld management website with the function of managing the rental of sports elds of users, stadium owners and system management. Full range of
                                                functions from statistics, sports eld management, billing, users, etc
                                            </span>
                                            <Stack direction={"row"} flexWrap="wrap" alignItems="center" className="gap-2 mt-4">
                                                {sportsProjects.map((value, index) => (
                                                    <Stack
                                                        key={index}
                                                        direction={"row"}
                                                        alignItems={"center"}
                                                        className="px-4 cursor-pointer py-2 rounded-full text-sm font-semibold text-gray-300 bg-green-500 transition-colors"
                                                        spacing={1}
                                                    >
                                                        <img src={value.icon} alt="" className="w-6 h-6" />
                                                        <span>{value.skill}</span>
                                                    </Stack>
                                                ))}
                                            </Stack>
                                            <a target="_blank" href="https://github.com/LeDuyNhan1201/sports-field-booking-client" className="text-gray-400 mt-2">
                                                https://github.com/LeDuyNhan1201/sports-field-booking-client
                                            </a>
                                        </Stack>
                                        <img src={"/images/sport.PNG"} className="w-[60%] absolute right-1 z-0 opacity-50" />
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack spacing={2} className="w-full" sx={{ animation: "slideDown 0.8s ease-out forwards" }}>
                            <h3 className={`${preahvihear.className} text-3xl`}> Certications</h3>
                            <Stack>
                                <Stack direction={"column"} alignItems="start" spacing={2}>
                                    <Stack className="w-[70%] z-1 p-4 rounded-md bg-gray-800 transition-colors cursor-pointer">
                                        <span>2025</span>
                                        <span className={`${preahvihear.className} text-green-500 text-xl mb-2`}>Toeic</span>
                                    </Stack>
                                    <Stack className="w-[70%] z-1 p-4 rounded-md bg-gray-800 transition-colors cursor-pointer">
                                        <span>2025</span>
                                        <span className={`${preahvihear.className} text-green-500 text-xl`}>Chứng nhận Thực tập sinh Công Nghệ Tài Năng VNA Group - Xuất sắc</span>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack spacing={2} className="w-full" sx={{ animation: "slideDown 0.8s ease-out forwards" }}>
                            <h3 className={`${preahvihear.className} text-3xl`}>Contact</h3>
                            <span className="w-[60%]">I am looking for an opportunity to prove my abilities. My ideas and capabilities will meet what you need. Contact me.</span>
                            <a href="mailto:yantic088@gmail.com" className={`${preahvihear.className} text-gray-400`}>
                                yantic088@gmail.com
                            </a>
                            <Stack direction={"row"} spacing={1} className="flex-wrap w-full">
                                <a
                                    href="https://www.facebook.com/trieudennn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 items-center justify-center flex rounded-full border-1 hover:bg-green-500 hover:text-white transition-all"
                                >
                                    <Facebook className="rounded-full" />
                                </a>
                                <a
                                    href="https://github.com/trieuden"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 items-center justify-center  border-1 flex rounded-full hover:bg-green-500 hover:text-white transition-all"
                                >
                                    <GitHub />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/trieuden/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 items-center justify-center  border-1 flex rounded-full hover:bg-green-500 hover:text-white transition-all"
                                >
                                    <LinkedIn />
                                </a>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            )}
        </Box>
    );
};
