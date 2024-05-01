import React from "react";

interface ButtonProps {
	btnText: string;
	btnLink?: string;
	btnCss?: string;
}

const GenericBtn: React.FC<ButtonProps> = ({ btnText, btnLink, btnCss }) => {
	return (
		<>
			<button className={btnCss ? btnCss : ""}>{btnText}</button>
		</>
	);
};

export default GenericBtn;
