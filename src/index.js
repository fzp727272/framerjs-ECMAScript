import styleColor from './color';
import browser from './browser';
import loading from './loading';



Framer.Defaults.Animation = {
	curve: Spring({damping: 0.5}),
};
//Framer.Defaults.Layer.borderRadius = "50%";





let backGround = new BackgroundLayer({
    backgroundColor:styleColor('dribbbleColor'),
    borderRadius:0,
});






loading();

/*


const wordStyle = {
	color:styleColor("#fff"),
	textAlign:"center",
	fontSize:"20px",
}

let word1 = new Layer({
	backgroundColor:styleColor('transparent'),
	width:Screen.width,
	height:30,
	x: Align.center,
	y:240,

})
word1.html = "Hi! I have some invitation code"
word1.style=wordStyle;

let word2 = new Layer({
	backgroundColor:styleColor('transparent'),
	width:Screen.width,
	height:30,
	x: Align.center,
	y:300,

})
word2.html = "Hi! I have some invitation code"
word2.style=wordStyle;

let word3 = new Layer({
	backgroundColor:styleColor('transparent'),
	width:Screen.width,
	height:30,
	x: Align.center,
	y:360,

})
word3.html = "Hi! I have some invitation code"
word3.style=wordStyle;



let layerA = new Layer({
	backgroundColor: styleColor('red'),
	x: Align.center,
	y: Align.center,
	opacity: 1,
	scale: 1,
	width:20,
	height:20,
});

layerA.draggable.enabled = true;
layerA.draggable.overdragScale = 0.25;
layerA.draggable.constraints ={
	x: 0,
    y: 0,
    width: Screen.width,
    height: Screen.height,
};
    


layerA.states = {
	hide: {
		opacity: 0,
		scale: 0.5,
	},
	haha:true,
};






layerA.on(Events.DoubleTap, () => {
	layerA.animate('hide');
});

layerA.on(Events.Click, () => {
	layerA.animate('hide');
});

layerA.on(Events.AnimationEnd, () => {
	Utils.delay(0.2, () => {
		layerA.animate('default');
	});
});*/
