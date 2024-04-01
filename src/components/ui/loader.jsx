import React from "react";
import "ldrs/tailChase"; // Default values shown

function Loader() {
	return (
		// Default values shown
		<div className="absolute inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm">
			<l-tail-chase size="40" speed="1.75" color="#cc4fb7"></l-tail-chase>
		</div>
	);
}

export default Loader;
