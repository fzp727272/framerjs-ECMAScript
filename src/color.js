const palette = {
	dribbbleColor:"#ea4c89",
	mainColor:"#333",
};

const styleColor = (value) => {
	if (palette[value]) {
		return new Color(palette[value]);
	} else {
		return new Color(value);
	}
};

export default styleColor;
