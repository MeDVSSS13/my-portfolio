import { motion } from "framer-motion";
import Skills from "../components/Skills";
import Head from "next/head";

const About = () => {
	return (
		<div className="h-screen lg:pl-20 lg:pr-32">
			<Head>
				<title>About | Dastan Keneshbekov</title>
			</Head>
			<div className="flex justify-between md:mx-20 md:pt-32 pt-28">
				<div className="flex flex-col md:ml-20 px-10 mt-10">
					<div className="flex flex-col md:flex-row">
						<div className=" md:px-8 ">
							<motion.div
								className="md:w-96"
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
											delay: 0.4,
										},
									},
								}}
							>
								<h1 className="text-3xl font-bold sm:text-4xl mb-8">
									Hello, I&#39;m <span className="text-cyan-400">Dastan</span>
								</h1>
							</motion.div>
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
											delay: 1,
										},
									},
								}}
							>
								<h2 className="font-bold text-3xl text-left mb-5">
									I&#39;m a
									<span className="text-cyan-400"> FrontEnd Developer</span>{" "}
									specializing in building
									<span className="text-cyan-400"> Exceptional Websites</span>.
								</h2>
							</motion.div>
						</div>
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
										delay: 1.6,
									},
								},
							}}
						>
							<p className="text-left font-normal mb-5 flex-wrap">
								As a FrontEnd Developer and enthusiast with a Bachelor's degree
								in Computer Science and Software Engineering, I bring a strong
								foundation in technology and a passion for crafting seamless
								user experiences. Fluent in four languages—English, Russian,
								Turkish, and Kyrgyz—I'm constantly expanding my linguistic
								horizons by learning Arabic. My aspiration is to elevate my
								skills and become a professional in frontend development within
								the next five years, driven by a dedication to mastering
								cutting-edge technologies and best practices.
							</p>
							<p className="text-left font-normal mb-5 flex-wrap"></p>
							<p className="text-left font-normal mb-5 flex-wrap">
								Outside of coding, you'll find me immersed in my other passions.
								I find joy in the strategic challenges of video games like Dota
								2 and FIFA 24, always seeking to improve my skills and stay at
								the top of my game. When I'm not in the digital realm, I love
								nothing more than engaging in physical activities like playing
								soccer with friends or delving into the world of literature
								through books. This diverse range of interests fuels my
								creativity, problem-solving abilities, and holistic approach to
								life and work.
							</p>
						</motion.div>
					</div>
					<div className="text-bold text-3xl mt-10">
						<Skills />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
