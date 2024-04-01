import { useDisclosure } from "@nextui-org/react";
import { createContext, useContext } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<ModalContext.Provider value={{ isOpen, onOpen, onOpenChange }}>
			{children}
		</ModalContext.Provider>
	);
};

const useModal = () => {
	return useContext(ModalContext);
};

export { ModalProvider, ModalContext, useModal };
