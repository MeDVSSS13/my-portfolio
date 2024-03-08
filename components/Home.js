import { motion } from "framer-motion";
import Link from "next/link";

const Home = () => {
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
						delay: 0.6,
					},
				},
			}}
		>
			<div className="flex px-4 md:py-32 mx-auto h-screen items-center">
				<div className="text-center mx-auto">
					<motion.img
						src="/images/profilePic/profilepic.png"
						alt="description_of_image"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1 }}
						width={400}
						className="rounded-full mx-auto md:rounded-4xl"
					/>
					<h1 className="text-4xl text-purple-500 font-extrabold md:text-6xl">
						Dastan Keneshbekov
					</h1>
					<h1 className="text-4xl text-cyan-500 font-extrabold md:text-6xl">
						FrontEnd Developer
					</h1>

					<p className="text-sm mt-4 sm:leading-relaxed md:text-xl text-black">
						Problem solver, Web developer, lifelong learner and a video gamer.
					</p>

					<div className="flex flex-wrap justify-center gap-4 mt-8 grid-cols-2">
						<Link href="/contact">
							<a className="px-12 py-3 text-sm font-medium text-culturedWhite bg-cyan-400 rounded shadow active:bg-cyan-600 hover:bg-cyan-500 focus:outline-none focus:ring">
								Contact Me
							</a>
						</Link>
						<Link href="/resume.pdf">
							<a
								target="_blank"
								rel="noopener noreferrer"
								className="px-12 py-3 text-sm font-medium text-cyan-400 bg-white border-2 border-cyan-400 rounded shadow active:bg-cyan-600 hover:border-cyan-500 hover:text-cyan-500 focus:outline-none focus:ring"
							>
								Resume
							</a>
						</Link>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Home;
