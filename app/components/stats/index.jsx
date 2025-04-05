// @flow strict
import { userData } from "@/data/user-data";
import Image from "next/image";
import GlowCard from "../helper/glow-card";
import SectionTitle from "../helper/section-title";

function GitStats() {
    return (
        <div id="tools" className="relative z-1 border-t my-12 lg:my-24 px-8 pt-12 border-[#25213b]">
            <h3 className="text-6xl font-bold">
                <span className="text-white">Top Tools </span>
                <span className="text-green-500">Used</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl">
                    <div className="w-16 h-16 rounded-xl overflow-hidden">
                        <img 
                            src="https://th.bing.com/th/id/R.6dfffd3ebb0f173f5cd13b432fcdb2db?rik=iXRI3ZSOL0Vw%2fg&pid=ImgRaw&r=0" 
                            alt="VS Code" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-white">VS Code</h4>
                        <p className="text-gray-400">Code editor</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl">
                    <div className="w-16 h-16 rounded-xl overflow-hidden">
                        <img 
                            src="https://miro.medium.com/v2/resize:fit:850/0*mm9JZGa8iMYFiwI-.jpg" 
                            alt="Trae" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-white">Trae</h4>
                        <p className="text-gray-400">AI Assistant</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl">
                    <div className="w-16 h-16 rounded-xl overflow-hidden">
                        <img 
                            src="https://tse2.mm.bing.net/th/id/OIP.LBlEJ8VRw-YoBk41nuitggHaHa?rs=1&pid=ImgDetMain" 
                            alt="Android Studio" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-white">Android Studio</h4>
                        <p className="text-gray-400">Android development</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl">
                    <div className="w-16 h-16 rounded-xl overflow-hidden">
                        <img 
                            src="https://th.bing.com/th/id/R.98865e06d77faca32b3e118df119049e?rik=AU0%2bE0ROLAbnog&riu=http%3a%2f%2flogonoid.com%2fimages%2fintellij-idea-logo.png&ehk=CapqYnZAeX0cbsUWxFNWr913YwdQDC7OFt%2ftIAEb%2fBU%3d&risl=&pid=ImgRaw&r=0" 
                            alt="IntelliJ" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-white">IntelliJ</h4>
                        <p className="text-gray-400">Java development</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GitStats;
