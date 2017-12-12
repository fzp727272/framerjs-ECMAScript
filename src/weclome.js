import styleColor from "./color";

const welcome = () => {

let word = new Layer({
backgroundColor:'transparent',
 x: Align.center,
        y: 240,
        opacity:0,
 
})
const wordStyle = {
	color:styleColor("#fff"),
	textAlign:"center",
	fontSize:"36px",
}



word.html = "Welcome to dribbble"



word.style = wordStyle;


word.animate({
            opacity:1,
            options: {
                time: .5,
                curve: Bezier.easeIn,
            }
        })
}
export default welcome