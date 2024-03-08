import { FiGithub } from "react-icons/fi";
import { FaLink } from "react-icons/fa";
// import {HiOutlineExternalLink} from 'react-icons/hi'
import Image from "next/image";
import Head from "next/head";

const projects = () => {
	return (
		<div className="h-screen mx-5 sm:mx-auto pt-32">
			<Head>
				<title>Projects | Dastan Keneshbekov</title>
			</Head>
			<h1 className="font-bold text-3xl text-center"></h1>
			<div className="max-w-5xl md:px-4 py-8 pb-32 mx-auto space-y-28">
				<section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
					<h1 className="font-bold text-lg md:text-xl text-cyan-500 pb-4">
						Word Game and Definition Finder
					</h1>
					<div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
						<div className="aspect-w-5 aspect-h-3">
							<Image
								src="/images/project-images/word-game.png"
								layout="fill"
								objectFit="contain"
								alt=""
							/>
						</div>
						<blockquote className="sm:col-span-2">
							<p className="text-xs md:text-base">
								Explore words effortlessly with our platform! Input any word to
								instantly access its definition and clear audio pronunciation.
								Whether you're a student, professional, or language enthusiast,
								our intuitive interface makes it easy to understand words like
								never before. Start your linguistic journey today!
							</p>
							<cite className="inline-flex items-center mt-8 not-italic">
								<span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
								<p className="text-xs md:text-base text-gray-500 sm:ml-3">
									Javascript, HTML, CSS
								</p>
							</cite>
							<div className="flex pt-8 space-x-4">
								<div>
									<a
										href="https://play-word-and-get-definition.netlify.app/"
										target="_blank"
										rel="noopner noreferrer"
									>
										<FaLink size="30px" />
									</a>
								</div>
								{/* <div> */}
								{/*     <HiOutlineExternalLink size='30px'/> */}
								{/* </div> */}
							</div>
						</blockquote>
					</div>
				</section>

				<section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
					<h1 className="font-bold text-lg md:text-xl text-cyan-500 pb-4">
						Bakery Website
					</h1>
					<div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
						<div className="aspect-w-4 aspect-h-3">
							<Image
								src="/images/project-images/chicago-bakes.png"
								layout="fill"
								objectFit="contain"
								alt=""
							/>
						</div>
						<blockquote className="sm:col-span-2">
							<p className="text-xs md:text-base">
								Welcome to our bakery website project! Our goal is to create a
								delightful online experience that mirrors the warmth and charm
								of our bakery. With a user-friendly interface and mouthwatering
								visuals, we aim to showcase our artisanal creations and provide
								a seamless browsing experience for our customers. Join us as we
								bring the essence of our bakery to life in the digital world!
							</p>
							<cite className="inline-flex items-center mt-8 not-italic">
								<span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
								<p className="text-xs md:text-base text-gray-500 sm:ml-3">
									Java, HTML, CSS, Sass, React
								</p>
							</cite>
							<div className="flex pt-8 space-x-4">
								<div>
									<a
										href="https://dev--dev-chicagobakes.netlify.app/"
										target="_blank"
										rel="noopner noreferrer"
									>
										<FaLink size="30px" />
									</a>
								</div>
								{/* <div> */}
								{/*     <HiOutlineExternalLink size='30px'/> */}
								{/* </div> */}
							</div>
						</blockquote>
					</div>
				</section>
			</div>
		</div>
	);
};

export default projects;
