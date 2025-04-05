// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 flex items-center justify-center">
        <h3 className="text-gray-400 text-lg">
          From <span className="text-red-500 font-semibold">trieuden</span> with love ❤️
        </h3>
      </div>
    </div>
  );
};

export default Footer;