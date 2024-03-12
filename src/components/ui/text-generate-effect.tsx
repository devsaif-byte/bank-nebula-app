import React, { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";
// import introSound from "../../assets/sounds/short-logo.mp3";
// import useSound from "use-sound";

export const TextGenerateEffect = ({
	words,
	className,
}: {
	words: string;
	className?: string;
}) => {
	const [scope, animate] = useAnimate();
	let wordsArray = words.split(" ");
	// const [play] = useSound(introSound, {
	// 	volume: 0.4,
	// });

	useEffect(() => {
		animate(
			"span",
			{
				opacity: 1,
			},
			{
				duration: 2,
				delay: stagger(0.4),
			}
		);

		// play();
	}, [scope.current]);

	const renderWords = () => {
		return (
			<motion.h1 ref={scope}>
				{wordsArray.map((word, idx) => {
					return (
						<motion.span
							key={word + idx}
							className={
								word === "Nebula:"
									? `bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500`
									: `dark:text-white text-neutral-300 opacity-0`
							}
						>
							{word}{" "}
						</motion.span>
					);
				})}
			</motion.h1>
		);
	};

	return (
		<div className={cn("font-bold", className)}>
			<div className="mt-4">
				{/* <div className=" dark:text-white text-slate-300 text-2xl leading-snug tracking-wide"> */}
				<div className=" dark:text-white text-neutral-300 leading-snug tracking-wide relative z-10  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold text-2xl md:text-7xl">
					{renderWords()}
				</div>
			</div>
		</div>
	);
};
