import React from "react";
import { BackgroundBeams } from "../../ui/background-beams";
import { Button } from "@nextui-org/react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import { TextGenerateEffect } from "../../ui/text-generate-effect";
import { Link } from "react-router-dom";

const words = `Nebula: Play With Your Cosmic Coin!`;

export function Hero() {
	return (
		<div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col antialiased">
			<Nav />
			<div className="max-w-5xl mx-auto p-4 grow my-auto">
				{/* <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold "> */}

				<TextGenerateEffect words={words} className="md:mt-48" />

				<p></p>
				<p className="text-neutral-400 max-w-lg mx-auto my-4 text-sm text-center relative z-10">
					{/* <p className="text-neutral-500 max-w-lg mx-auto my-2 text-center relative z-10 text-base md:text-xl mt-8 dark:text-neutral-200 mb-4"> */}
					Dive into the Nebula Bank app for a galactic giggle! Open and close
					accounts with a tap, explore whimsical loans, and zap your money
					across the universe. It&apos; a celestial joyride - no seriousness,
					just interstellar fun! 🚀💫
				</p>
				<Button
					className="relative z-10"
					color="secondary"
					variant="ghost"
					radius="none"
					as={Link}
					to="/login"
				>
					Get Started
				</Button>
			</div>
			<Footer />
			<BackgroundBeams />
		</div>
	);
}
