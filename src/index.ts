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

let video: Sprite = Sprite.from("/video/hub.mp4");
let video2: Sprite = Sprite.from("/video/wheel.mp4");

const clampy: Sprite = Sprite.from("/clampy.png");

clampy.on("click", () => playVideo());

clampy.interactive = true;


centerAnchor(video);
centerAnchor(clampy);
centerAnchor(video2);

centerToStage(video, app);
centerToStage(clampy, app);
centerToStage(video2, app);

video.texture.baseTexture.resource.load();
video2.texture.baseTexture.resource.load();

app.stage.addChild(clampy);	

const playVideo = () => {
	app.stage.addChild(video);
	video.interactive = true;

	//@ts-ignore
	video.texture.baseTexture.resource.source.loop = true;

	video.on("click", () => changeVideo());
}

const changeVideo = () => {
	video = Sprite.from("/video/wheel.mp4");
	video.texture.update();

	console.log(video.texture.baseTexture.resource);
	app.stage.removeChild(video);
	app.stage.addChild(video2);	

	//@ts-ignore
	video2.texture.baseTexture.resource.source.loop = true;
}