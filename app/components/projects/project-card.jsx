import { colors } from "@/data/colors";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { IoLinkSharp } from "react-icons/io5";

// @flow strict
function ProjectCard({ project }) {
  
  return (
    <Link href={project.html_url} target="_blank">
      <div className="p-6 h-48 flex flex-col justify-between bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 border border-gray-700">
        <div>
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold text-white hover:text-green-500 transition-colors">
              {project.name}
            </p>
            <IoLinkSharp className="text-green-500 text-xl hover:scale-110 transition-transform" />
          </div>
          <p className="line-clamp-2 text-gray-400 my-4 text-sm">
            {project.description}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors">
              <FaRegStar className="text-green-500" />
              <span>{project.stargazers_count}</span>
            </p>
            <p className="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors">
              <FaCodeFork className="text-green-500" />
              <span>{project.forks_count}</span>
            </p>
          </div>
          <p className="flex items-center gap-2">
            <span
              style={{ backgroundColor: colors[project.language] }}
              className="w-2.5 h-2.5 rounded-full">
            </span>
            <span className="text-gray-400 text-sm">{project.language}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;