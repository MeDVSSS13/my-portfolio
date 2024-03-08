import HomePage from "../components/Home";
import Head from "next/head";

export default function Home() {
	return (
		<div>
			<Head>
				<meta
					name="google-site-verification"
					content="VJs2G3ynvYQ1KG06ciOhdPdklC1gIUEkJ2KcplrnfWU"
				/>
				<meta
					name="description"
					content="Dastan Keneshbekov portfolio. I am web developer, data analyst and machine learning enthusiast. DastanKeneshbekov, DastanKeneshbekov, Dastan Keneshbekov"
				/>
				<title>Dastan Keneshbekov</title>
			</Head>
			<HomePage />
		</div>
	);
}
