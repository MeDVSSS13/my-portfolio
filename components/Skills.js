import { motion } from "framer-motion";
import Image from "next/image";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiJirasoftware } from "react-icons/si";
import { SiNetlify } from "react-icons/si";

const Skills = () => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={{
				hidden: {
					scale: 0.8,
					opacity: 0,
				},
				visible: {
					scale: 1,
					opacity: 1,
					transition: {
						delay: 2.0,
					},
				},
			}}
		>
			<div className="w-full pb-32">
				<div className="mx-auto flex flex-col justify-center">
					<p className=" font-bold text-cyan-500 pb-4 text-center">Skills</p>

					<ul className="flex justify-start items-center flex-row gap-8 flex-wrap mb-2 bg-blue-50 p-8 rounded-2xl">
						<span className="text-purple-500 text-2xl w-full text-center md:w-fit">
							Frontend
						</span>
						<li className=" text-xl font-bold flex justify-center items-center flex-col">
							<FaReact size="40px" />
							React
						</li>
						<li className=" text-xl font-bold flex justify-center items-center flex-col">
							<SiSass size="40px" />
							Sass
						</li>
						<li className=" text-xl font-bold flex justify-center items-center flex-col">
							<FaHtml5 size="40px" />
							HTML
						</li>
						<li className=" text-xl font-bold flex justify-center items-center flex-col">
							<FaCss3Alt size="40px" />
							CSS
						</li>
						<li className=" text-xl font-bold flex justify-center items-center flex-col">
							<SiTailwindcss size="40px" />
							Tailwind CSS
						</li>
						<li className=" text-xl font-bold flex justify-center items-center flex-col">
							<FaBootstrap size="40px" />
							Bootstrap
						</li>
						<li className=" text-xl font-bold flex justify-center items-center flex-col">
							<SiRedux size="40px" />
							Redux
						</li>
						<li className=" text-xl font-bold flex justify-center items-center flex-col">
							<SiJavascript size="40px" />
							JavaScript
						</li>
					</ul>

					<ul className="flex items-center flex-row gap-8 flex-wrap mb-2 bg-blue-50 p-8 rounded-2xl">
						<span className="text-purple-500 text-2xl w-full text-center lg:w-fit">
							Other
						</span>
						<li className="text-xl font-bold flex justify-center items-center flex-col">
							<FaGithub size="40px" />
							git/GitHub
						</li>
						<li className="text-xl font-bold flex justify-center items-center flex-col">
							<SiNpm size="40px" />
							Npm
						</li>
						<li className="text-xl font-bold flex justify-center items-center flex-col">
							<SiFigma size="40px" />
							Figma
						</li>
						<li className="text-xl font-bold flex justify-center items-center flex-col">
							<SiJirasoftware size="40px" />
							Jira
						</li>
						<li className="text-xl font-bold flex justify-center items-center flex-col">
							<SiNetlify size="40px" />
							Netlify
						</li>
					</ul>
				</div>
			</div>
		</motion.div>
	);
};

export default Skills;
