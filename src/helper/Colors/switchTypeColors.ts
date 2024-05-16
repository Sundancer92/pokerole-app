interface TypeProps {
	type: string;
}

const typeColor = (type: string): string => {
	switch (type) {
		case "Bug":
			return "#7eae31";
			break;
		case "Dark":
			return "#6a4d34";
			break;
		case "Dragon":
			return "#844177";
			break;
		case "Electric":
			return "#f9b427";
			break;
		case "Fairy":
			return "#fe9c98";
			break;
		case "Fighting":
			return "#b64e24";
			break;
		case "Fire":
			return "#ff5619";
			break;
		case "Flying":
			return "#8b96ad";
			break;
		case "Ghost":
			return "#61608f";
			break;
		case "Grass":
			return "#44b15a";
			break;
		case "Ground":
			return "#c6a145";
			break;
		case "Ice":
			return "#23b8c5";
			break;
		case "Normal":
			return "#968e6d";
			break;
		case "Poison":
			return "#ce5674";
			break;
		case "Psychic":
			return "#ff6d6c";
			break;
		case "Rock":
			return "#ab9345";
			break;
		case "Steel":
			return "#9c9897";
			break;
		case "Water":
			return "#3882aa";
			break;

		default:
			return "#5f5858";
			break;
	}
};

export default typeColor;
