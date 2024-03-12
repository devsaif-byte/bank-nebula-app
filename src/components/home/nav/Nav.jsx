import React from "react";
import { Navbar, NavbarBrand, NavbarContent, Button } from "@nextui-org/react";
import { Logo } from "../../common/Logo";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<Navbar shouldHideOnScroll className="py-6 px-3 relative z-10">
			<NavbarBrand>
				<Logo />
				<p className="font-bold text-inherit">Nebula</p>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4" justify="end">
				<Button
					href="#"
					as={Link}
					to="/login"
					color="secondary"
					showAnchorIcon
					variant="solid"
					radius="none"
				>
					Login
				</Button>
			</NavbarContent>
		</Navbar>
	);
}
