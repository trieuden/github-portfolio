// @flow strict

import GitHubCalendar from "react-github-calendar";
import SectionTitle from "../helper/section-title";


function Contributions() {
  return (
    <div id="contact" className="relative z-1 mx-8 border-t my-12 lg:my-24 border-[#25213b]">
      <h3 className="text-6xl font-bold mt-12">
        <span className="text-white">Get in </span>
        <span className="text-green-500">Touch</span>
      </h3>
      
      <div className="mt-8 flex flex-col gap-4">
        <p className="text-gray-400 max-w-2xl">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        
        <div className="flex w-1/3 items-center gap-4 p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <a href="mailto:yantic088@gmail.com" className="text-xl font-semibold text-white hover:text-green-500 transition-colors">
            yantic088@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contributions;