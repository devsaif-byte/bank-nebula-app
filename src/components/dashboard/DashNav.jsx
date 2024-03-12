import { Button, Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";
import { Logo } from "../common/Logo";
import { Link } from "react-router-dom";

export default function DashNav() {
	return (
		<Navbar shouldHideOnScroll className="py-6 px-3 relative z-10">
			<NavbarContent>
				<p className="font-bold text-inherit">John Doe</p>
			</NavbarContent>
			<NavbarContent justify="center" className="gap-1">
				<Logo />
				<p className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
					Nebula
				</p>
			</NavbarContent>
			<NavbarContent className="hidden sm:flex gap-4" justify="end">
				<Button
					href="#"
					as={Link}
					to="/login"
					showAnchorIcon
					variant="bordered"
					radius="none"
					className="font-bold text-inherit"
				>
					Logout
				</Button>
			</NavbarContent>
		</Navbar>
	);
}
