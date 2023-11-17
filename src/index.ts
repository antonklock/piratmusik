import { Application, Sprite } from 'pixi.js'
import centerAnchor from './utils/centerAnchor';
import centerToStage from './utils/centerToStage';


const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});

const clampy: Sprite = Sprite.from("/clampy.png");

clampy.eventMode = "dynamic";
clampy.on("click", () => startGame());

let video: Sprite;
let video2: Sprite;

centerAnchor(clampy);
centerToStage(clampy, app);

app.stage.addChild(clampy);	


const startGame = () => {
	console.log("start game");

	video = Sprite.from("/video/hub.mp4");
	video2 = Sprite.from("/video/wheel.mp4");

	centerAnchor(video);
	centerAnchor(video2);

	centerToStage(video, app);
	centerToStage(video2, app);

	app.stage.addChild(video);

	video.eventMode = "dynamic";
	video.on("click", () => changeVideo());

	//@ts-ignore
	video.texture.baseTexture.resource.source.loop = true;

	//@ts-ignore
	video2.texture.baseTexture.resource.source.loop = true;

	app.stage.addChild(video);
	// app.stage.removeChild(video);

	video.texture.baseTexture.resource.load();
	video2.texture.baseTexture.resource.load();
}

const changeVideo = () => {
	app.stage.removeChild(video);
	app.stage.addChild(video2);
}